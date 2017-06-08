console.log(process.argv);

function leerOpcion(opcion){
    var index = process.argv.indexOf(opcion);
        if(index==-1){
            return false;
        }else{
            return process.argv[index+1];
        }
}

var nombre = leerOpcion("-nombre");

console.log("el nombre es " + nombre);


process.stdout.write("cual es el apellido: \n ");

process.stdin.on("data", function(data){
    
    console.log("el nombre es "+ nombre+ " y apellido "+data+ "\n");
    process.exit();
}

