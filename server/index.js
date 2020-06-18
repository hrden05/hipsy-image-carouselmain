const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');
const model = require('./model/images.js');

const app = express();
const PORT = 3000;

app.use(parser.json());
app.use(morgan('dev'));
app.use(express.json());

app.get('/api/images', (req, res, next) => {
  model.getAll()
    .then((images) => {
      res.status(200).send(images);
    })
    .error((error) => {
      res.status(400).send(error);
    });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
