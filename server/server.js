// // Set up
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var request = require('request');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/.././client'));

// ROUTES
app.get('/', function(req, res, next) {
  console.log('home');
  res.sendFile('/index.html');
  res.end();
});

app.get('/items', function(req, res, next) {
  request('https://s3-us-west-2.amazonaws.com/famous-hiring/famousEbayData.json', function(err, response, body) {
    var data = response.body;
    res.send(data);
  })

});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(app.get('port'), function(){
  console.log('listening on port:' + app.get('port'));
});

module.exports = app;

