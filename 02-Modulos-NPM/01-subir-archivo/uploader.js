'use strict'

var http = require('http').createServer(serverUpload),
	util = require('util'),
	formidable = require('formidable'),
	fse =require('fs-extra')


function serverUpload(req, res)
{
	if(req.method.toLowerCase() =='get' && req.url =='/'){

		var form= `
		<h1>Subir archivos</h1>
			<form action ="/upload" enctype= "multipart/form-data" method ="post">
				<div><input type="file" name="upload" required></div>
				<br>
				<div><input type="submit" value="subir archivo"></div>
			</form>`
		res.writeHead(200,{'Content-Type':'text/html'})
		res.end(form)
	}

	if(req.method.toLowerCase() =='post' && req.url == '/upload')
	{
		let form = new formidable.IncomingForm()

		form
			.parse(req,function(err, fields, files){
				res.writeHead(200,{'Content-Type':'text/html'})
				res.write(`
					<h1>archivos recividos</h1>
					<a href="/">Regresar<a/> 
					<br>
					<code> ${util.inspect( {files:files} )} </code>
					`)
				res.end()
			})
			.on('progress', function(bytesReceived, bytesExpected){
				let percentComplete  = (bytesReceived / bytesExpected) * 100
				console.log(percentComplete.toFixed(0))
			})
			.on('error', function(err) {
				console.log(err)
			})
			.on('end', function(fields, files){
				//hubicacion temporal del archivo
				let tempPath = this.openedFiles[0].path,
					//el nombre del archivo
					fileNmae = this.openedFiles[0].name,
					//nueva ubicacion 
					newLocation = './upload/' + fileNmae

					fse.copy(tempPath, newLocation, function(err){
						return (err) ? console.log(err) : console.log('el archivo se subio con exito')
					})

			})

		return	
	}
	
}	

http.listen(3000)

console.log('Servidor corriendo en http://localhost:3000/')
