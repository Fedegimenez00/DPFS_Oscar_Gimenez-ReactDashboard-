const express = require("express");
const router = express.Router();


const {getUsers, profile} = require('../../controllers/api/users.apiControllers');

//Endpoint de usuarios
router 
.get ('/', getUsers) 

.get ('/profile/:id', profile) 




module.exports = router;