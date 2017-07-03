<?php
require "conexion.php";

$resultado = mysqli_query($con, "SELECT * FROM clientes");

while($fila = mysqli_fetch_assoc($resultado)){
    
    echo $fila['nombre'] . "<br>";
}

mysqli_close($con);

?>