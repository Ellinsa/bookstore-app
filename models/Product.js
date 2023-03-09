const path = require('path');
const fs = require('fs');
const rootDir = require('../util/path');
const storage = path.join(rootDir, 'data', 'products.json');

const getProductsFromStorage = (cb) => {
  fs.readFile(storage, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, image, price, description) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = description;
  }

  save() {
    getProductsFromStorage((products) => {
      products.push(this);
      fs.writeFile(storage, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromStorage(cb);
  }
};
