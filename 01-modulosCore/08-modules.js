'use strict'

var myData = require('./my-data.js'),
	//Clock = require('./clock-ES5.js')
	Clock = require('./clock-ES6.js'),

	cucu = new Clock()


	
console.log(
	'nombre: ' + myData.name+ " y email: "+ 
	myData.email

	) 






 

cucu.on('tictac',function(){
	cucu.theTime()
})