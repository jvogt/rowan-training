var express = require('express');
var app = express();
var fs = require("fs");
var formPhrase = require('font-ascii').default; 

app.get('/hello-world', function (req, res) {
  console.log(req.headers)
  res.end( formPhrase('Awesome Phrase') + '\n' );
})

app.get('/six-months', function (req, res) {
  provided_date = req.query['date']
  formatted_date = new Date(provided_date)
  console.log(formatted_date)
  six_months_later = new Date(formatted_date.setMonth(formatted_date.getMonth()+6));
  res.end( 'you will die in ' + six_months_later + '\n' );
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})