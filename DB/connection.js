// import mongoose
const mongoose = require("mongoose");

//
const DB = process.env.DATABASE;

//Connect mongoose
mongoose.connect(DB).then(() => {
        console.log("Database Connection Established");
    })
    .catch((error) => {
        console.log(error);
    });
