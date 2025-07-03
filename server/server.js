require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
//middleware
app.use(express.json());   //it means now we use json

app.use("/api/auth", router);


const PORT = 5000;

connectDb().then(() =>{
app.listen(PORT, ()=>{
    console.log(`server is running at port : ${PORT}`);
});
});