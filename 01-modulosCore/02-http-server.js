/*
'use strict'

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo el numero de puerto es: ' + port + ' y el host es ' + hostname);
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});

*/

'use strict'

var http = require('http')

function webServer(req,res)
{
	res.writeHead(200,{'Content-Type':'text/html'})
	res.end('<h1>hola desde node js</h1>')
}

http
	.createServer(webServer)
	.listen(3000,"localhost")

console.log('servidor corriendo en  http://localhost:3000/')