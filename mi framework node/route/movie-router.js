'use strict'
var MovieController = require('../controller/movie-controller'),
	express = require('express'),
	router = express.Router()


router
	
	.get('/', MovieController.getAll)

	.get('/agregar', MovieController.addForm)

	.post('/', MovieController.insert)

	.get('/editar/:movie_id', MovieController.getOne)

	.post('/actualizar/:cliente_id',MovieController.update)

	.post('/eliminar/:movie_id',MovieController.delete)

	.use(MovieController.error404)


module.exports = router	