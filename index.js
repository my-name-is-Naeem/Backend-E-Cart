//Automatically load .env file in to our application
require("dotenv").config();

//Import Express
const express = require("express");

//import cors
const cors = require("cors");

//import db connection.js
require('./DB/connection');

//import db connection.js
const router=require('./Routes/router')


//create server application
const server=express()

//Define Port
const PORT=5001;


//run Application
server.listen(PORT,()=>{
    console.log("server listening on PORT " + PORT);
})

//use server
server.use(cors());
server.use(express.json());
server.use(router);

//routes - localhost:5001
server.get("/", (req, res) => {
    res.status(200).json("Shopping Cart Server starts....");
});
