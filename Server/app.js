const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MONGODB_URI =
  'mongodb+srv://agdoie-app:0ISZL1RJpYp6FDUM@cluster0.7hawrym.mongodb.net/expence_tracker';

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });