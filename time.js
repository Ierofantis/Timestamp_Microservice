var express = require('express');
var app = express();
var moment = require('moment');
var path = require('path');

const PORT = process.env.PORT || 8081;

app.get('/', function(req, res, next) {
  var fileName = path.join(__dirname, 'index.html');
  res.sendFile(fileName, function(error) {
    // pass on a error message if there was an error
    if (error) { next('File was not found'); }
  })
});

app.get("/:date", function(req, res) {
  var date = moment(req.params.date,"MMMM D, YYYY");

  // Not getting called cause date returns valid even with unix timestamps
  if (!date.isValid()) {
    date = moment.unix(req.params.date);
  }

  if (!date.isValid()) {
    res.json({
      'correct': null,
      'unix': null
    });
  }

  res.json({
    'correct': date.format('MMMM DD, YYYY'),
    'unix': date.format('X')
  });
});

app.listen(PORT, function (error) {
  console.log("Server is listening on port %s", PORT)
});
