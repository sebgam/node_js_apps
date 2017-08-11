'use strict'

var http = require('http'),
	options = {
		host : 'bextlan.com',
		port : 80,
		path : '/'
	}


	http

		.get(options,function(res){
			console.log(`el sitio ${options.host} ah respondido. codigo de estado: ${res.statusCode}`)
	})	
		.on('error', function(err){
			console.log('el sitio ' + options.host + ' no respondio. codigo de estado: ' + err.code + ' error ' + err.message)
	
	})