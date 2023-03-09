const express = require('express');
const router = express.Router();

const AdminController = require('../controllers/Admin');
const prefix = '/add-product';

router.get(prefix, AdminController.getAddProduct);
router.post(prefix, AdminController.postGetProduct);

router.get("/edit-product", AdminController.getEditProduct);
router.delete("/delete-product", AdminController.deleteProduct);

router.get("/products", AdminController.getAdminProducts);

module.exports = router;
