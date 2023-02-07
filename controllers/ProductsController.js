const Product = require('../models/Product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    docTitle: 'Add product',
    path: '/admin/add-product',
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

exports.getAllProducts = (req, res, next) => {
  Product.fetchAll((allProducts) => {
    res.render('shop', {
      prods: allProducts,
      docTitle: 'Shop',
      path: '/',
      hasProducts: allProducts > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
