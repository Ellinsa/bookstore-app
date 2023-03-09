const Product = require('../models/Product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((allProducts) => {
    res.render('shop/product-list', {
      prods: allProducts,
      docTitle: 'Shop',
      path: '/products',
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
exports.getOrders = (req, res, next)=>{
    res.render('shop/orders', {
      docTitle: 'Shop',
      path: '/orders',
      activeShop: true,
      productCSS: true,
    });
 
}
exports.getCart = (req, res, next)=>{
    res.render('shop/cart', {
      docTitle: 'Cart',
      path: '/cart',
      activeShop: true,
      productCSS: true,
    });
}
exports.getProductDetail = (req, res, next)=>{
    res.render('shop/product-details', {
      docTitle: 'Details',
      path: '/cart',
      activeShop: true,
      productCSS: true,
    });
}
exports.getCheckout = (req, res, next)=>{
    res.render('shop/checkout', {
      docTitle: 'Checkout',
      path: '/checkout',
      activeShop: true,
      productCSS: true,
    });
}
