var express = require('express');
var morgan = require('morgan');
var path = require('path');
var YouTube = require('youtube-node');
var youTube = new YouTube();
youTube.setKey('');// Add your Youtube API key
var app = express();
var counter=0;
app.use(morgan('combined'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/counter', function (req, res) {
   youTube.search('Titanic Trailer', 2, function(error, result) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(result);
    var str=JSON.stringify(result, null, 2);
    console.log("result :"+str);
    res.send(str);
  }
});
 counter++;
});
var port = 3000;
app.listen(port, function () {
  console.log(`Server started and app listening on port ${port}!`);
});
