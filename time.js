var express = require('express');
var app = express();
var moment = require('moment');
var fs = require('fs');
var path = require('path');

app.get('/', function(req, res) {
  var fileName = path.join(__dirname, 'index.html');
  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

app.get("/:date", function(req, res) {
var date;
date = moment(req.params.date,"MMMM D, YYYY");
 if (!date.isValid())
    date = moment.unix(req.params.timestamp);
  
  if (!date.isValid()) {
    res.json({
      'correct': null,
      'unix': null
    });
  }
  
  res.json({
    'correct': date.format('MMMM DD, YYYY'),
    'unix': dateformat('X')
  });

});








var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server is listening at http://%s:%s", host, port)

})