//To define routes for the client request

//import express
const express=require('express');


const productController=require('../Controllers/productConroller')

const wishlistController=require('../Controllers/wishlistController')

const cartController=require('../Controllers/cartController')


//using express create an object for router class inorder to setup path 
const router=new express.Router();

//resolve various client request

// api call

// 1.Get all Products
router.get('/products/allProducts',productController.getAllProducts);

//2.View particular product Details
router.get('/products/viewProduct/:id',productController.viewProduct);

//3.Add to wishlist
router.post('/products/addtowishlist',wishlistController.addtowishlist);

//4.getWishlists details
router.get("/products/wishlist",wishlistController.getWishlist);

//5.delete Wishlist
router.delete('/products/deletewishlist/:id',wishlistController.deleteWishlist);

//6.addToCart
router.post('/products/addToCart',cartController.addToCart);

//7.getCart Products Details
router.get("/products/carts",cartController.getAllCarts);

//8.Delete cart product
router.delete('/products/deleteCart/:id',cartController.delete);

//9.Increment cart count
router.get('/products/increment/:id',cartController.incrementCartItems);

//9.Increment cart count
router.get('/products/decrement/:id',cartController.decrementCartItems);



//export router
module.exports=router;
