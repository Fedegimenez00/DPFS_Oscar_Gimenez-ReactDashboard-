const express = require("express");
const router = express.Router();

const { getCategories } = require('../../controllers/api/categories.apiControllers');

router
.get('/', getCategories)

module.exports = router;