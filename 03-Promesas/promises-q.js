'use strict'

var fs = require('fs'),
	Q = require('q'),
	file = 'assets/nombres.txt',
	newFile = 'assets/nombres-promises-q.txt'

function existFile(file)
{
	let defer = Q.defer()
	fs.access(file,fs.F_OK, function(err){
		return (err) ? defer.reject(new Error('el archivo no existe')) : defer.resolve(true)
	})
	return defer.promise
}

function readFile(file)
{
 	let defer = Q.defer()
 	console.log('el archivo existe')
 	fs.readFile(file, function(err, data){
 		return (err) ? defer.reject(new Error('El archivo no se pudo leer')) : defer.resolve(data)
 	})

 	return defer.promise
}

function writeFile(file,data)
{
  	let defer = Q.defer()
  	console.log('el archivo se ah leido exitosamente')
  	fs.writeFile(file, data , function(err){
  		return (err) ? defer.reject(new Error('el archivo no su pudo copiar')) : defer.resolve('el archivo se copio con exito')
  	})

  	return defer.promise
 }

	/*
}
si existe
	abrelo
	leelo
	copialo
	avisa que se copio
	--en caso contrario
		maneja errores*/


existFile(file)
	.then(function(){ return readFile(file) })
	.then(function(dataPromise){ return writeFile(newFile, dataPromise) })
	.then(function(dataPromise){ return console.log(dataPromise)})
	.then(function(err){ return console.log(err.message)})
	
