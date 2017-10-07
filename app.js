var express = require('express');

var app = express();

app.get('/', function (req, res){
	res.send('hello jenkins!!!!!');
});
//cambio para testear cdf
//cambio para testear cdf
//cambio para testear cdf
//cambio para testear cdf
//cambio para testear cdf
//cambio para testear cdfbueno

app.listen(process.env.PORT || 5000);

module.exports = app;