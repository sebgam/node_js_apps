'use strict'

var http = require('http').createServer(webServer),
	form = require('fs').readFileSync('assets/formulario.html'),
	querystring = require('querystring'),
	util = require('util'),
	dataString = ''


function webServer(req ,res){

	if(req.method == 'GET')
	{
		res.writeHead(200,{'Content-Type' : 'text/html'})
		res.end(form)
	}

	if(req.method == 'POST')
	{
		req
			.on('data', function(data){
				dataString += data
			})
			.on('end',function(){
				var dataObject = querystring.parse(dataString),
				dataJSOn = util.inspect(dataObject),
					templateString = `
				los datos que enviaste por POST como string son: ${dataString}
				Los datos que enviaste por Psot como obejtos son: ${dataJSOn}
				`

				console.log(templateString)
				res.end(templateString)
			})

	}
}

http.listen(3000)
console.log('servidor corriendo en  http://localhost:3000/')	