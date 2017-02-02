var http = require("http");

function peticionServidor(req,resp){

console.log("peticion enviada");
resp.writeHead(200,{"Content-Type" : "text/html"});
resp.write("<h1>bienvenido a este </h1>");
resp.end("hola mundo");


}



http.createServer(peticionServidor).listen(8888);

console.log("servidor creado");

