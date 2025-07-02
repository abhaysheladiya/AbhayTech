const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.status(200).send("hello guys server connected");
});

app.get("/register", (req, res) =>{
    res.status(200).send("welcome to registration page");
})

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`server is running at port : ${PORT}`);
})