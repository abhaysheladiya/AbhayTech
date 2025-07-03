const User = require("../models/user-model");
const home = async (req, res) => {
  try {
    res.status(200).send("welcom to the page");
  } catch (error) {
    console.log(error);
  }
};

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
    res.status(500).json("internal server error");
  }
};

module.exports = { home, register };
