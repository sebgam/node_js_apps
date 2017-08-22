'use strict'

var express = require('express'),
	app = express()


app.get('/', function(req, res){
	res.send('<h1>hola node.js</h1>')
})

app.get('/desarrollog', function(req, res){
	res.redirect(301, 'http://desarrollog.epizy.com/')
})

app.render('/render', function(req, res){
	res.redirect(`${__dirname}/assets/index.html`)
})

app.get('/json', function(req, res){
	res.json({
		name: "sebastian",
		age : 24,
		facebook : "sebasgamboa123"
	})
})	

app.listen(3000)

console.log('Escuchando por puerto http://localhost:3000')