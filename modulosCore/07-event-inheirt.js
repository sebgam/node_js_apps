'use strict'

var EventEmitter = require('events').EventEmitter,
	inherit = require('util').inherits

var Clock = function(){
	var self = this
	setInterval(function(){
		self.emit('tictac')
	},1000)
}

inherit(Clock,EventEmitter)

Clock.prototype.theTime =function(){


	var date = new Date(),
		hrs = date.getHours(),
		min = date.getMinutes(),
		sec = date.getSeconds(),
		msg = hrs + ":"+min+ ":"+sec

console.log(msg)

}



var cucu = new Clock()

cucu.on('tictac',function(){
	cucu.theTime()
})