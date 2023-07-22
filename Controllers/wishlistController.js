//import wishlists
const wishlists = require("../model/wishlistSchema");

//Logic for add to wishlist

// exports.addtowishlist=async(req,res)=>{
//get product details from request
// req.body={
//     id:'3',
//     title:'hd',
//     price:4444
// }
// }

//Logic for wishlist if values not knew then we use destructure way

//Destructure req.body
exports.addtowishlist=async(req,res)=>{

const {id,title,price,image} = req.body;

//Logic 

try {
    const item = await wishlists.findOne({id});
    if (item) {
        res.status(404).json("Product already exists");
    } else {
        //add item to wishlist collection
        const newItem = new wishlists({id,title,price,image});
        //to store item in wishlist collection
        await newItem.save();
        //response send back to client 
        res.status(200).json("Product added to wishlist");
    }
} 
catch (error) {
    //if product already added in wishlist then error message
    res.status(404).json(error);
}
}

////Logic for view wishlist product details

exports.getWishlist=async (req,res)=>{
    //Logic for view  wishlist product details
    try{

        const allWishlists=await wishlists.find()
        res.status(200).json(allWishlists)
    }
    catch(error){
        res.status(404).json(error)
    }
}

//delete wishlists product details
exports.deleteWishlist=async(req,res)=>{
    //get particular id from the request
    const {id}=req.params 

    //logic for delete wishlist product
    try{
        const removeWishlists=await wishlists.deleteOne({id})

        //get all wishlists product after removing particular product details
        if(removeWishlists){
            const allItems=await wishlists.find()
            res.status(200).json(allItems)
        }
    }
    catch(error){
        res.status(404).json(error)
    }

}