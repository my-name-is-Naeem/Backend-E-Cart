//import mongoose
const mongoose = require("mongoose");

//Define schema for products collection to store data
const productSchema = new mongoose.Schema({
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
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image:{
        type:String,
        required:true
    },
    rating: {
        rate: {
            type: Number,
            required: true,
        },
        count: {
            type: Number,
            required: true,
        },
    }
});

//Create a model to store product details
const products = new mongoose.model("products",productSchema);

//exports model
module.exports = products;
