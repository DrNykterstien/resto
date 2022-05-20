const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const expressLayouts = require('express-ejs-layouts');
const routers = require('./routers/index');
require('dotenv').config();

const app = express();

app.use(favicon(path.join(__dirname, '/../public', 'favication.ico')));
app.disable('x-powered-by');
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', './layouts/website');
app.set('views', './src/views');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV == 'development') app.use(morgan('dev'));

app.use('/', routers);

module.exports = app;
