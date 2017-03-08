var set = setTimeout(function(){
   
    console.log("corriendo...");
    
},2000);

clearTimeout(set);

var valor =0;

var int = setInterval(function(){
    valor++;
    console.log(valor);
    
    if(valor==5){
clearInterval(int);
}
    
},1000)



