'use strict'
var express = require('express'),
	router = express.Router()

function jade(req, res, next){
	let locals ={
		title: "jade",
		link : "http://desarrollog.epizy.com/",
		description : "Jade es un motor de plantillas de alto rendimiento fuertemente influenciado por Haml y implementado con JavaScript para nodos y navegadores. Para informes de errores, solicitudes y preguntas, abra un problema. Para la discusión unirse a la sala de chat"
	}
	res.render('index', locals)
}	

function ejs(req, res, next){
	let locals ={
		title: "EJS",
		link : "http://www.embeddedjs.com/",
		description : "También es posible usar ejs.render (dataAndOptions); Donde se pasa todo en un solo objeto. En ese caso, terminará con variables locales para todas las opciones pasadas. Sin embargo, tenga en cuenta que su código podría romperse si agregamos una opción con el mismo nombre que una de las propiedades de su objeto de datos. Por lo tanto, no recomendamos usar este acceso directo."
	}
	res.render('index', locals)
}	

function error404(req, res, next){
	let error = new Error(),
		locals ={
			title: "error 404",
			description : "recurso no encontrado",
			error : error
		}
	error.status = 404	
	res.render('error',locals)	
	next()
}

router
	.get('/', (req, res) => {
		res.end(`
			<h1>configuracion terminada de app en expres </h1>
		`)
	})
	.get('/jade', jade)

	.get('/ejs', ejs)

	.use(error404)


module.exports = router	