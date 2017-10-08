(function(d,io,$){
	'use strict'
	var io = io()

$('#chat-form').on('submit', function(e){
	e.preventDefault()
	io.emit('new message',$('#message-text').val() ) //envia la variable new message al server
	$('#message-text').val(null)
	return false

})

io.on('new user', function(newUser){
	alert(newUser.message)//muestra el mesaje de entrada de un nuevo usuario
})
io.on('user says', function(userSays){
	$('#chat').append('<li>' + userSays + '</li>')//agrega contenido del inputtext en una lista
})
io.on('bay bay user', function(bayBayUser){
	alert(bayBayUser.message)//muestra el mesaje de entrada de un nuevo usuario
})


})(document, io, jQuery)

