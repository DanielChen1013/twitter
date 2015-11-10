var swig = require('swig');


// var inputs = {
// 	title: "Our Story",
// 	people: [{
// 		name: 'Gandalf'
// 	},
// 	{
// 		name: 'Barney the dinosaur'
// 	},
// 	{
// 		name: "Dan"
// 	}
// 	]
// };
// swig.renderFile(__dirname + '/views/index.html', inputs, function(err,output) {
// 	console.log(output);
// });

var data = {
    title: 'An Example',
    people: [{
        name: 'Gandalf',
    }, {
        name: 'Frodo'
    }, {
        name: 'Hermione'
    }]
};
swig.renderFile(__dirname + '/views/index.html', data, function (err, output) {
	if (err) console.error(err);
    console.log(output);
});

