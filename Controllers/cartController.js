// import carts from "../model/cartSchema";

const carts=require('../model/cartSchema');

//add to cart
exports.addToCart=async(req ,res)=>{
    //get product details from request
    const {id,title,price,image,quantity}= req.body

    try{
        //check if product is already in cart then update the quantity and price
        //else add to cart
        const product=await carts.findOne({id})
        if(product)
        {

            //if product is already in cart,increment the quantity
            product.quantity+=1;
    
            //update grand total
            product.grandTotal=product.price*product.quantity
    
            //save the changes into db
            product.save()
    
            //send response back to the client
            res.status(200).json("Item Updated...✨");
        }
        else{
            //else -product not in the cart,add to cart
            const newCartProduct = new carts({ id, title, price, image, quantity, grandTotal: price });//Order is important because save().
            //save new product
            await newCartProduct.save();

            ////send response back to the client
            res.status(200).json("Item added successfully to cart");
        }




    }
    catch(error){
        res.status(401).json(error)
    }

}

exports.getAllCarts = async (req, res) => {
    //Logic
    try {
        //get all  from product collection in MongoDB
        const allCarts = await carts.find();

        //response send back to client
        res.status(200).json(allCarts);
    } catch (error) {
        res.status(401).json(error);
    }
};

exports.delete=async(req,res)=>{
    //remove cart item
    //get product id from parameter
    const {id}=req.params
    try{
        const removeCartItem=await carts.deleteOne({id})
        if(removeCartItem.deleteCount!=0)
        {
            //get all cart item after removing particular cart item
            const allCarts=await carts.find();
            res.status(200).json(allCarts);
        }
    }
    catch(error)
    {
        res.status(401).json(error);
    }
}

//Increment Cart items
exports.incrementCartItems=async (req,res)=>{
    //get product id from request
    const {id}=req.params
    try{
        //if product is already in cart
        const product=await carts.findOne({id})
        if(product)
        {
            //Update the quantity and grand total 
            product.quantity+=1;
            product.grandTotal=product.quantity*product.price;
            //save changes to MongDB
            await product.save();
            //update details send back to client
            const allCarts = await carts.find();
    //response send back to client
            res.status(200).json(allCarts);
        }
        else{
            res.status(404).json("Product not found in cart");
        }


    }
    catch(error){
        res.status(402).json(error)
    }
}

exports.decrementCartItems = async (req, res) => {
    //get product id from request
    const { id } = req.params;
    try {
        //if product is already in cart
        const product = await carts.findOne({ id });
        if (product) {
            //Update the quantity and grand total
            product.quantity -= 1;

            if(product.quantity==0)
            {
                const removeCartItem = await carts.deleteOne({ id });
                const allCarts = await carts.find();
                res.status(200).json(allCarts);

            }
            else{
                product.grandTotal = product.quantity * product.price;
                }
            //save changes to MongDB
            await product.save();
            //update details send back to client
            const allCarts = await carts.find();
            //response send back to client
            res.status(200).json(allCarts);
        } else {
            res.status(404).json("Product not found in cart");
        }
    } catch (error) {
        res.status(402).json(error);
    }
};
