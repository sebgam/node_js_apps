// hacer debug con node con el core de node

'use strict'

var http = require('http')

function webServer(req,res)
{
	res.writeHead(200,{'Content-Type':'text/html'})

	res.end('<h1>hola desde node js</h1>')
	debugger;
}

http
	.createServer(webServer)
	.listen(3000,"localhost")

console.log('servidor corriendo en  http://localhost:3000/')