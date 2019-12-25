require('./server/config');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(morgan('combined'));

app.use(express.json());

app.use(require('./server/routes/index'));

mongoose.connect(process.env.DB, { 
     useUnifiedTopology: true,
     useNewUrlParser: true 
}, (err, res) => {

     if (err) throw err;
 
     console.log(`Connected to database..........`);
 
 });

app.listen(process.env.PORT, () => console.log(`Server listening port ${process.env.PORT}..........`));