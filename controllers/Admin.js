const Product = require('../models/Product');
const prefix = "admin";

exports.getAddProduct = (req, res, next) => {
  res.render(`${prefix}/add-product`, {
    docTitle: 'Add product',
    path: `/${prefix}/add-product`,
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
};

exports.postGetProduct = (req, res) => {
    const newProduct = new Product(req.body.title);
    newProduct.save();
    res.redirect('/');
  };

exports.getAdminProducts = (req, res, next) =>{
  res.render(`${prefix}/products`, {
    docTitle: 'Admin products',
    path: `/${prefix}/products`,
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
}