var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter', name: 'Nimit', tweets: tweets, showForm: true} );
});

router.get('/users/:name', function(req,res) {
	var name = req.params.name;
	var userData = tweetBank.find({name: name});
	console.log(userData);
	res.render('index', {title: name + "'s' Twitter Feed", tweets: userData});
})

router.get('/users/:name/tweets/:id', function(req,res) {
	var name = req.params.name;
	var id = req.params.id;
	var userData = tweetBank.find({name: name, id: id});
	console.log(userData);
	res.render('index', {title: name + "'s' Twitter Feed", tweets: userData}); //add something here
})

module.exports = router;

// request.path to get route
// if (__dirName + request.path)
// 		response.sendFile 
// else next();

