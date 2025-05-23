const express = require("express");
const router = express.Router();


const {show, getProducts} = require('../../controllers/api/products.apiControllers');


router 
//Endpoint de productos
//.get ('/products/', getProducts)

//Endpoint de detalle de  un producto
.get ('/detail/:id', show)
.get ('/', getProducts)




module.exports = router;
