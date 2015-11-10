// app.js will be our main application
// Static (unchanging) files in public will be automatically served when requested
// files in routes and views will let us define dynamic content.

var express = require( 'express' );
var app = express(); // creates an instance of an express application

app.get("/", function(req, res){
	res.send("Welcome message");
})

// app.listen(3000);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
})