const home = async (req, res)=>{
    try{
        res.status(200).send("welcom to the page");
    }catch (error){
        console.log(error);
    }
};


const register = async (req, res)=>{
    try{
        res.status(200).send('welcome to registration page')
    }catch(error){
        res.status(400).send({msg:"page not found"})
    }
}

module.exports= { home, register };