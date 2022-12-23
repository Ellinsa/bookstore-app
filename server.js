const http = require('http');
const fs = require('fs');

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(shopRoutes);
app.use(adminRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
