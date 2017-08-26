'use strict'

var express = require('express'),
	favicon = require('serve-favicon'),
	morgan = require('morgan'),
	routes = require('./route/index'),
	faviconUrl = `${__dirname}/public/img/Temptation2.png`,
	publicdir = express.static(`${__dirname}/public`),
	viewDir = `${__dirname}/views`,
	port = (process.env.PORT || 3000),
	app = express()

app
	//configurando app
	.set('views' , viewDir)
	.set('view engine' , 'jade')
	//.set('view engine' , 'ejs')
	.set('port', port)
	//ejecutando middlewares
	.use(favicon(faviconUrl))
	.use(morgan('dev'))
	.use(publicdir)
	//ejecuto midlewares enrutador
	.use('/',routes)


module.exports = app	