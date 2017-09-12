'use strict'

var mysql = require('mysql'),
	conf = require('./db-conf'),
	dbOptions ={
		host: conf.mysql.host,
      	user: conf.mysql.user,
      	password: conf.mysql.pass,
      	port: conf.mysql.port,
      	database: conf.mysql.db
	},
	myConn = mysql.createConnection(dbOptions)

	myConn.connect((err)=>{
		return (err) ? console.log(`Error al conectarse a MYSQL: ${error.stack}`) : console.log(`Conexion establecida con MYSQL numero: ${myConn.threadId}`)
	})

	module.exports = myConn