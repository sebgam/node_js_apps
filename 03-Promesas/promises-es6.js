'use strict'

var fs = require('fs'),
	file = 'assets/nombres.txt',
	newFile = 'assets/nombres-promises-es6.txt',
	promise = new Promise(function(resolve, reject){
		fs.access(file,fs.F_OK, function(err){
		return (err) ? reject(new Error('el archivo no existe')) : resolve(true)
		})
	}) 

promise
	.then((resolved) => {
		console.log('el archivo existe')
 		
 		return new Promise((resolve, reject) => {
 			fs.readFile(file, function(err, data){
 			return (err) ? reject(new Error('El archivo no se pudo leer')) : resolve(data)
 			})
 		})
	})
	.then((resolved) => {
		console.log('el archivo se ah leido exitosamente')

		return new Promise((resolve, reject) => {
			fs.writeFile(newFile, resolved , function(err){
  			return (err) ? reject(new Error('el archivo no su pudo copiar')) : resolve('el archivo se copio con exito')
  			})
		})
  		
	})
	.then((resolve) => {
		console.log(resolve)
	})
	.catch((err) => {
		console.log(err.message)
	})
