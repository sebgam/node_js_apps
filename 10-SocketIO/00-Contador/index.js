'use strict'

var http = require('http').createServer(server),
	fs = require('fs'),
	io = require('socket.io')(http),
	conexions = 0


function server(req, res)
{
	fs.readFile('index.html',(err, data)=>{
		if(err){
			res.writeHead(500,{'Content-Type':'text/html'})
			return res.end('<h1>Error interno del servidor</h1>')
		}
		else
		{
			res.writeHead(200,{'Content-Type':'text/html'})
			return res.end(data, 'utf-8')
		}
	})

}

http.listen(3000)
console.log('Servidor corriendo desde localhos:3000')

io.on('connection',(socket)=>{ //inicia la conexion
	socket.emit('hello',{ message :'hola mundo con socket.IO' })//emite objeto

	socket.on('otro evento que me invente',(data)=>{  //emite objeto
	console.log(data)
	})

	conexions++

	console.log(`conexiones activas: ${conexions}`)

	//socket.emit('connect users', { numbers: conexions}
	socket.broadcast.emit('connect users', { numbers: conexions}) //emite eventos a todos menos a quien lo genero BROADCAST


	socket.on('disconnect',()=>{           //descaonectar ventana
		conexions--
		console.log(`Conexiones activas: ${conexions}`)
		socket.broadcast.emit('connect users', { numbers: conexions})
	})
})

