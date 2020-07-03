const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');
const model = require('./model/images.js');

const app = express();
const PORT = 58008;

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('/api/images', (req, res) => {
//   model.getAll()
//     .then((images) => {
//       res.status(200).send(images);
//     })
//     .catch((error) => {
//       res.status(400).send(error);
//     });
// });

app.get('/api/images', (req, res) => {
  const { itemId } = req.query;
  console.log(itemId);
  model.getItem(Number(itemId))
    .then((images) => {
      res.status(200).send(images);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
