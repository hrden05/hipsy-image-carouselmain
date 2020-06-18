const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
