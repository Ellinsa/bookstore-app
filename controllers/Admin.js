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
exports.getEditProduct = (req, res, next) => {
  res.render(`${prefix}/edit-product`, {
    docTitle: 'Add product',
    path: `/${prefix}/edit-product`,
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
};
exports.deleteProduct = (req, res, next) => {
  const {title, image, price, description} = req.body;
  const newProduct = new Product(title,image, price, description)
  newProduct.save();
  res.redirect('/');
};

exports.postGetProduct = (req, res) => {
    const {title, image, price, description} = req.body;
    const newProduct = new Product(title,image, price, description)
    newProduct.save();
    res.redirect('/');
  };

exports.getAdminProducts = (req, res, next) =>{
  Product.fetchAll((allProducts) => {
  res.render(`${prefix}/products`, {
    docTitle: 'Admin products',
    hasProducts: allProducts > 0,
    prods: allProducts,
    path: `/${prefix}/products`,
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
})
}