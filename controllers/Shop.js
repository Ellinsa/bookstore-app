const Product = require('../models/Product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((allProducts) => {
    res.render('shop/product-list', {
      prods: allProducts,
      docTitle: 'Shop',
      path: '/',
      hasProducts: allProducts > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

exports.getIndex = (req, res, next)=>{
  Product.fetchAll((allProducts) => {
    res.render('shop/product-list', {
      prods: allProducts,
      docTitle: 'Shop',
      path: '/',
      hasProducts: allProducts > 0,
      activeShop: true,
      productCSS: true,
    });
  });
}
exports.getCart = (req, res, next)=>{
    res.render('shop/cart', {
      prods: allProducts,
      docTitle: 'Cart',
      path: '/cart',
      hasProducts: allProducts > 0,
      activeShop: true,
      productCSS: true,
    });
}
exports.getProductDetail = (req, res, next)=>{
    res.render('shop/product-details', {
      prods: allProducts,
      docTitle: 'Details',
      path: '/cart',
      hasProducts: allProducts > 0,
      activeShop: true,
      productCSS: true,
    });
}
exports.getCheckout = (req, res, next)=>{
    res.render('shop/checkout', {
      prods: allProducts,
      docTitle: 'Checkout',
      path: '/checkout',
      hasProducts: allProducts > 0,
      activeShop: true,
      productCSS: true,
    });
}
