require('dotenv').config();
cookieParser = require('cookie-parser')
const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.use(cookieParser())

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }))

const router = require('./app/router');

app.use(router);

app.listen(PORT, () => {
  console.log(`Okanban back running on ${PORT}`)
})