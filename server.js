// server.js
// where your node app starts

// init project}
var express = require('express');
var app = express();
var formidable = require('formidable');
 
// we've started you off with Express,  
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/get-file-size", function(req, res ){
  var reply = {};
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    if (err) throw err;
       reply = {
        "size" : files.uploadedFile.size
      };
      res.json(reply);
      res.end();
    });
   
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
