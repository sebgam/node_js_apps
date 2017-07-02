<?php
require "conexion.php";

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];

if(empty($nombre) || empty($correo)){
    echo"<span style ='color: red;'>por favor ingrese su nombre y correo</span>";
}else{
    
    $resultado = mysqli_query($con, "INSERT INTO clientes (nombre,correo) VALUES ('$nombre' , '$correo')");
    echo "<span style ='color: green;'>Gracias " . $nombre . "</span>";
}



?>