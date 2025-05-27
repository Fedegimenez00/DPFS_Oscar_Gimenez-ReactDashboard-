const express = require("express");
const router = express.Router();

const { getCategories, getProductsByCategory } = require('../../controllers/api/categories.apiControllers');

router
.get('/', getCategories)
.get('/:id', getProductsByCategory)


module.exports = router;