const http = require('http');
const fs = require('fs');
const path = require('path');
const rootDir = require('./util/path');
const express = require('express');
const app = express();
const expressHbs = require('express-handlebars');
const ErrorPageController = require('./controllers/404');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, 'public')));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(shopRoutes);

//filtered path
app.use('/admin', adminRoutes);

app.use('not-found', ErrorPageController.getErrorPage);

app.listen(3000);
