//Logic defined in this

//import products collection
const products = require("../model/productSchema");

//get all Products
exports.getAllProducts = async (req, res) => {
    //Logic
    try {
        //get all products from product collection in MongoDB
        const allProducts = await products.find();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(401).json(error);
    }
};

exports.viewProduct = async (req, res) => {
    //get productId from request
    const id = req.params.id;
    //logic
    try {
        //Check id is present in MongoDB
        const product = await products.findOne({ id });
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json("Product not found");
        }
    } catch (error) {
        res.status(404).json(error);
    }
};
