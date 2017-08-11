console.log('hola Putos desde noje .js')
console.log(2+5)
console.log(Date())
console.log(__dirname);


 var contador = 0;
 var tiempo = setInterval(function(){
	var sumaT = contador + 1;
 	console.log(sumaT);
 	contador++

 	if(contador == 5){
 		clearInterval(tiempo);
 	}


 },1000);
 	


