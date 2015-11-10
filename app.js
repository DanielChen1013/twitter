// app.js will be our main application
// Static (unchanging) files in public will be automatically served when requested
// files in routes and views will let us define dynamic content.ls
var express = require( 'express' ),
	swig = require('swig');
var app = express(); // creates an instance of an express application

var tweetBank = require("./tweetBank")

var routes = require('./routes');
app.use("/", routes)

swig.setDefaults({
	cache: false});

app.use(function(req, res, next){
	console.log(req.method + " " + req.path + " " + res.statusCode); //log the middleware, order counts, must come first
	
	next();
})

app.engine('html', swig.renderFile);

app.set('view engine', 'html');

app.set('views', __dirname + '/views');



// app.get("/", function(req, res){
// 	res.send("Welcome message");
// })

// app.get("/news", function(req, res){
// 	res.send("No new is good news");
// })

// app.get("/test", function(req,res){
// 	var people = [
// 		{name: 'Blue Bottle'}, {name: 'Starbucks'}, {name: 'Others'}];

// 	res.render( 'index', {title: 'Gourmet Cafes', people: people});
// })

app.listen(3000, function(){
	console.log("Serving listening on 3000")
})

// var server = app.listen(3000, function(){
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Example app listening at http://%s:%s', host, port);
// })