var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 1337;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var routes = require('./routes/index');
var quotes = require('./routes/quotes');

app.use('/', routes);
app.use('/quotes', quotes);

app.listen(port, function () {
  console.log('Chris Quotes listening on port 1337!');
});

module.exports = app;