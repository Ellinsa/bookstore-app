const http = require('http');
const fs = require('fs');
const path = require('path');
const rootDir = require('./util/path');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, 'public')));
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(shopRoutes);

//filtered path
app.use('/admin', adminRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'not-found.html'));
});

app.listen(3000);
