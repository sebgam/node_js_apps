'use strict'

var fs = require('fs'),
 	file = 'assets/nombres.txt',
 	newFile = 'assets/nombres-callback.txt'

fs.access('assets/nombres.txt', fs.F_OK, function(err){
	if(err)
	{
		console.log('el archivo existe')
	}else
	{
		console.log('el archivo no existe')
		fs.readFile(file,function(err, data)
		{
			if(err)
			{
				console.log('el archivo no se puede leer')
			}else{
				console.log('el archivo se ha leido correctamente')
				fs.writeFile(newFile , data , function(err){
					return (err) ? console.log('el archivo no se pudo copiar') : console.log('el archivo ase a copiado con exito')
				})
			}
		})
	}
})