'use strict'

var MovieModel = require('../models/movie-model'),
	MovieController= ()=>{}


	MovieController.getAll =(req,res,next)=>{
		MovieModel.getAll((err, rows)=>{
				if(err){
					let locals ={
							title: "Error sl consultar la base de datos",
							description : "Error sintaxys SQL",
							error : err
						}
						
					res.render('error',locals)	

				}else{
					let locals = {
					title : 'lista Peliculas',
					data : rows 
					}	
					res.render('index',locals)
				}	
		})
	}

	MovieController.getOne = (req,res,next)=>{
		let movie_id = req.params.movie_id //requerir del formulario el id

		MovieModel.getOne(movie_id, (err,rows)=>{
				if(err)
				{
					let locals ={
							title: `Error al consultar el registro con el id ${movie_id}`,
							description : "Error sintaxys SQL",
							error : err
						}
						
					res.render('error',locals)	
				}else{
					let locals ={
						title: 'editar pelicula',
						data : rows
					}

					res.render('edit-movie',locals)
				}

			})
	}

	MovieController.insert = (req,res,next)=>{
		let movie = {
				movie_id : req.body.movie_id,
				title : req.body.title,
				release_year : req.body.release_year,
				rating : req.body.rating,
				image : req.body.image
			}
			console.log(movie)

		MovieModel.insert(movie,(err)=>{
			if(err){
				let locals ={
							title: `Error al agregar el registro a la base de datos ${movie.movie_id}`,
							description : "Error sintaxys SQL",
							error : err
						}
						
					res.render('error',locals)	
			}else{
				res.redirect('/')
			}
		})	
	}

	MovieController.update = (req,res,next)=>{
		let movie = {
				movie_id : req.body.movie_id,
				title : req.body.title,
				release_year : req.body.release_year,
				rating : req.body.rating,
				image : req.body.image
			}
			console.log(movie)

		MovieModel.update(movie,(err)=>{
			if(err){
				let locals ={
							title: `Error actualizar registro en la base de datos ${movie.movie_id}`,
							description : "Error sintaxys SQL",
							error : err
						}
						
					res.render('error',locals)	
			}else{
				res.redirect('/')
			}
		})		
	}

	MovieController.delete = (req,res,next)=>{
		let movie_id = req.params.movie_id

		MovieModel.delete(movie_id,(err,rows)=>{
				if(err){
				let locals ={
							title: `Error al agregar el registro a la base de datos ${movie.movie_id}`,
							description : "Error sintaxys SQL",
							error : err
						}
						
					res.render('error',locals)	
			}else{
				res.redirect('/')
			}
		})
	}	

	MovieController.addForm = (req,res,next)=>{

		res.render('add-movie',{title : 'Agregar Pelicula'})
	}

	MovieController.error404 = (req,res,next)=>{
		let error = new Error(),
			locals ={
				title: "error 404",
				description : "Recurso no encontrado",
				error : error
			}
		error.status = 404	
		res.render('error',locals)	
		next()
	}

module.exports = MovieController