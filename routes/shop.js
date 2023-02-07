const express = require('express');
const path = require('path');
const router = express.Router();

const ProductsController = require('../controllers/ProductsController');

router.get('/', ProductsController.getAllProducts);

module.exports = router;
