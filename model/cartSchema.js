//import mongoose
const mongoose = require("mongoose");

//Define schema for carts collection to store data
const cartSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    grandTotal: {
        type: Number,
        required: true,
    },
});

//Create a model to store cart details
const carts = new mongoose.model("carts", cartSchema);

//exports model
module.exports = carts;
