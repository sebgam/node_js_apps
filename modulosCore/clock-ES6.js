'use strict'

var Clock =(function(){
		var EventEmitter = require('events').EventEmitter,
		inherit = require('util').inherits

	var Clock = function(){
		//var self = this
		setInterval( () => {
			this.emit('tictac')
		},1000)
	}

	inherit(Clock,EventEmitter)

	Clock.prototype.theTime =function(){


		var date = new Date(),
			hrsAmPm = ( date.getHours() > 12  ) ? (date.getHours() - 12) : date.getHours(),
			hrs = addZero(hrsAmPm),
			min = addZero( date.getMinutes() ),
			sec = addZero( date.getSeconds() ),
			ampm = (hrs < hrsAmPm) ? 'AM' : 'PM',
			//msg = hrs + ":"+min+ ":"+sec + ' ' + ampm
			msg = 	`${hrs}:${min}:${sec} ${ampm} ES6 `

			function addZero(num){
				return (num < 10) ? ('0' + num) : num
			}

	console.log('la hora es ' + msg)

	}

	return Clock;

})()


module.exports = Clock