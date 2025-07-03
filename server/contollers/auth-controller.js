const User = require("../models/user-model");
const bcrypt =require("bcryptjs");
//home contoller
const home = async (req, res) => {
  try {
    res.status(200).send("welcom to the page");
  } catch (error) {
    console.log(error);
  }
};

//registration controller
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "email already exist " });
    }

    
    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({ 
        msg: "registration successful", 
        token: await userCreated.generateToken(), 
        userId: userCreated._id.toString(),

    });
  } catch (error) {
    //res.status(500).json("internal server error");
     next(error);
  }
};

//login controller
const login = async (req, res) =>{
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        console.log(userExist);

        if(!userExist){
            return res.status(500).json({message: "invalid credentials"});
        }

        //const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);
 
        if(user){
        res.status(200).json({ 
        msg: "login successful", 
        token: await userExist.generateToken(), 
        userId: userExist._id.toString(),
        });
    }else{
        res.status(401).json({message: "invalid email or password"});
    }

    } catch (error) {
        res.status(500).json("internal server error");
    }
}

module.exports = { home, register, login };
