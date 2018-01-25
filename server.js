var express = require('express');
var morgan = require('morgan');
var path = require('path');
var YouTube = require('youtube-node');
var youTube = new YouTube();
//var $ = require('jquery');
youTube.setKey('AIzaSyCVnV8xa8Ip3WpQKP6il3znRf99SYZdayM');
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
    console.log("----"+str);
    //document.body.s.innerHTML = '<pre>' + str + '</pre>';
    //$('#s').html('<pre>' + str + '</pre>');
    res.send(str);
  }
});
 counter++;
  //res.send(""+counter);
});
var port = 3000;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
