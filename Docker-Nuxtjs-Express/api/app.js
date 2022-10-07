// dotenv
require('dotenv').config();
const PORT = '18080';

// express
const express = require('express');
const app = express();

// cors
const cors = require('cors');
app.use(cors());

// bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routing_file
const indexRouter = require('./routes/index');

// routing
app.use('/', indexRouter);

// start_the_server
app.listen(PORT);
