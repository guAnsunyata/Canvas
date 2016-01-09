var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('./api/db');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

//routes
require('./routes/index')(app);

app.listen(3000);
console.log('Running on port 3000...');