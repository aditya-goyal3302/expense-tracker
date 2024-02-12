const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MONGODB_URI =
  'mongodb+srv://agdoie-app:0ISZL1RJpYp6FDUM@cluster0.7hawrym.mongodb.net/expence_tracker';
const adminRoutes = require('./Routes/admin');

const jwt = require('jsonwebtoken')

app.use(bodyParser.json());

app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(2948);
  })
  .catch(err => {
    console.log(err);
  });