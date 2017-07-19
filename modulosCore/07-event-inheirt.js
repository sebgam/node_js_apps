'use strict'

var EventEmitter = require('events').EventEmitter

var Clock = function(){
	var self = this
	setInterval(function(){
		console.log('hola')
	},1000)
}


var cucu = new Clock()