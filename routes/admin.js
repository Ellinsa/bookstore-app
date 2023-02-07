const express = require('express');
const router = express.Router();

const ProductsController = require('../controllers/ProductsController');
const prefix = '/add-product';

router.get(prefix, ProductsController.getAddProduct);
router.post(prefix, ProductsController.postGetProduct);

module.exports = router;
