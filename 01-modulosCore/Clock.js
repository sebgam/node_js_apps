'use strict'

class Clock{

	constructor()
	{
		

		setInterval( () => {
			this.theTime()
		},1000)


	}

	theTime()
	{


		var date = new Date(),
			hrsAmPm = ( date.getHours() > 12  ) ? (date.getHours() - 12) : date.getHours(),
			hrs = addZero(hrsAmPm),
			min = addZero( date.getMinutes() ),
			sec = addZero( date.getSeconds() ),
			ampm = (hrs < hrsAmPm) ? 'AM' : 'PM',
			//msg = hrs + ":"+min+ ":"+sec + ' ' + ampm
			msg = 	`${hrs}:${min}:${sec} ${ampm} clases `

			function addZero(num){
				return (num < 10) ? ('0' + num) : num
			}

	console.log('la hora es ' + msg)

	}


}

module.exports = new Clock()



