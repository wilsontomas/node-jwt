const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
//middlewares
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//routes
app.use('/api',routes);

module.exports = app;