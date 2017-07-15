'use strict'

var fs = require('fs'),
	readsStream = fs.createReadStream('assets/nombres.txt'),
	writeStream = fs.createWriteStream('assets/nombres_copia.txt')

	readsStream.pipe(writeStream)

	readsStream.on('data',function(chunk){
		console.log(
				'he leido:',
				chunk.length,
				' caracteres'
			)
	})

	readsStream.on('end',function(){
		console.log('termine de leer el archivo')
	})