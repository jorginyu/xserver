const express = require('express');

const app = express();

app.use(require('./user'));

module.exports = app;