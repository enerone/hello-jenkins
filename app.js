var express = require('express');

var app = express();

app.get('/', function (req, res){
	res.send('hello jenkins!!!!!');
});
//vamos a realizar una prueba con deploy esperemos que llegue

var estaes = 42;

app.listen(process.env.PORT || 5000);

module.exports = app;