const express = require('express');
const mysql = require('mysql');

const app = express();

const db = require('./src/config/db');

app.use(express.static('./src/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', require('./src/routes/index.routes'));

app.listen(8080);