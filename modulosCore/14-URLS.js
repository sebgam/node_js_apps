'use strict'

var http = require('http').createServer(webServer),
	path = require('path'),
	url = require('url'),
	urls = [
		{
			id:1,
			route : '',
			output: '<h2>Home</h2>'
		},{
			id:2,
			route : 'acerca',
			output: '<h2>Acerca</h2>'
		},{
			id:3,
			route : 'contacto',
			output: '<h2>Contacto</h2>'
		}
	]

function webServer(req,res)
{
	var message = '<h1>Hola node js</h1>',
		pathURL = path.basename(req.url),
		id = url.parse(req.url , true ).query.id

		console.log('patch: ' + pathURL + ' id: ' + id)

		urls.forEach( function(pos){
			if(pos.route == pathURL || pos.id == id ){
				res.writeHead(200,{'Content-Type':'text/html'})
				res.end(message + pos.output)
			}
		} )
	
	if(!res.finished){
		res.writeHead(404,{'Content-Type':'text/html'})
				res.end('<h1> Error 404: Not found</h1>')
	}
}

http.listen(3000)

console.log('servidor corriendo en  http://localhost:3000/')