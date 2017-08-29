'use strict'

var express = require('express'),
	favicon = require('serve-favicon'),
	bodyParser = require('body-parser')
	morgan = require('morgan'),
	routes = require('./route/index'),
	faviconUrl = `${__dirname}/public/img/Temptation2.png`,
	publicdir = express.static(`${__dirname}/public`),
	viewDir = `${__dirname}/views`,
	port = (process.env.PORT || 3000),
	app = express()

app
	
	.set('views' , viewDir)
	.set('view engine' , 'jade')
	.set('port', port)
	.use(favicon(faviconUrl))
	.use( bodyParser.json() )
	.use( bodyParser.ulrencoded({extended: false}) )
	.use(morgan('dev'))
	.use(publicdir)
	.use(routes)


module.exports = app	