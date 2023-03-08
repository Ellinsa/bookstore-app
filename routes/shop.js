const express = require('express');
const path = require('path');
const router = express.Router();

const ProductsController = require('../controllers/Shop');

router.get('/', ProductsController.getIndex);

router.get("/products", ProductsController.getProducts);
router.get("/cart", ProductsController.getCart);
router.get("/checkout", ProductsController.getCheckout);


module.exports = router;
