<?php

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];

if(empty($nombre) || empty($apellido) ){
    echo "por favor ingrese nombre y apellido";
}else{
    echo "Gracias " . $nombre . " " . $apellido . "¡";
}


?>