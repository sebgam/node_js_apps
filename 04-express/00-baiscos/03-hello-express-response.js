'use strict'

var express = require('express'),
	app = express()


app.get('/', function(req, res){
	res.send('hola node.js');
})	

app.listen(3000)

console.log('Escuchando por puerto http://localhost:3000')