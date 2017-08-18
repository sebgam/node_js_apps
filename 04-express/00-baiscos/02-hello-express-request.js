'use strict'

var express = require('express'),
	app = express()


app.get('/', function(req, res){
	res.send('hola node.js');
})

app.get('/user/:id-:name-:edad', function(req, res){
	res.end(`
			<h1>bienvenido se&ntildeor ${req.params.name}</h1>
			<p> tu id es: ${req.params.id} </p>
			<p> tu edad es: ${req.params.edad} </p>
		`)
})	

app.get('/search' , (req,res) =>{
	res.end(`
			<h1>los resultados de la busqueda son:</h1>
			<mark>${req.query.s}</mark>
		`)
})

app.listen(3000)

console.log('Escuchando por puerto http://localhost:3000')