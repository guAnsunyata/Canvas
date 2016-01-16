var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var mongoose = require('./api/db');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
require('./routes/index')(app);
//bradley in !

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});
// console.log('Running on port 3000...');