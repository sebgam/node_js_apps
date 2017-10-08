'use strict'

var express = require('express'),
	app = express(),
	http = require('http').createServer(app),
	io = require('socket.io')(http),
	port = process.env.PORT || 3000,
	publicDir = express.static(`${__dirname}/public`)

app
	.use(publicDir)
	.get('/', (req,res)=>{
		res.sendFile(`${publicDir}/index.html`)
	})

http.listen(port,()=>{
	console.log('iniciando express y Socket.io en localhost: %d', port)
})	


io.on('connection', (socket)=>{// ejecuta la conexion
	socket.broadcast.emit('new user',{message : 'Ha entrado un uuasrio al chat'})// emite a todos menos a la fuente

	socket.on('new message',(message)=>{// resive de la vista el evento "new message"
		io.emit('user says', message)
	})

	socket.on('disconnect', () => {
		console.log('ah salido un usuario del chat')
    	socket.broadcast.emit('bay bay user',{message : 'Ka salido un uuasrio al chat'})
  });

})



