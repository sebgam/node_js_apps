'use strict'

var express = require('express'),
	app = express(),
	cookieParse = require('cookie-parser'),
	cookieSession = require('cookie-session')

app.use( cookieParse() )
app.use( cookieSession( {secret : "secreto"}) )

app.get('/', function(req, res){

	req.session.visita||(req.session.visita = 0)
	let  n = req.session.visita++
	res.end(`
			
			<h1> Contador express </h1>
			<p>visitas <b> ${n} </b></p>
		`);
})	

app.listen(3000)

console.log('Escuchando por puerto http://localhost:3000')