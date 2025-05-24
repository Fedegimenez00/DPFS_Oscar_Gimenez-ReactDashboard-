const express = require("express");
const router = express.Router();


const {show, getProducts, lastProduct} = require('../../controllers/api/products.apiControllers');


router 
//Endpoint de productos
.get ('/', getProducts)

//Endpoint de detalle de  un producto
.get ('/detail/:id', show)

//Endpoint del último producto
.get('/last-product', lastProduct)




module.exports = router;
