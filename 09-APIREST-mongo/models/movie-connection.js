'use strict'

var mongoose = require('mongoose'),
	conf = require('./db-conf'),
	Schema = mongoose.Schema,
	MovieSchema = new Schema({
		movie_id : "string",
		title : "string",
		release_year : "string",
		image: "string",
		rating: "string"
	}, { collection: "movie"}),
	MovieModel= mongoose.model("Movie", MovieSchema)
	
	mongoose.connect(`mongodb:\/\/${conf.mongo.host}/${conf.mongo.db}`)

	module.exports = MovieModel