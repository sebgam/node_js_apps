<?php
require "conexion.php";

 $resultadoDB = mysqli_query($con, "SELECT * FROM clientes");

$usuarioDB = "";
$usuarioDB .= "<table class='table table-striped'>";
$usuarioDB .="<tr>";
$usuarioDB .="<th>Nombre</th>"; 
$usuarioDB .="<th>Correo</th>"; 
$usuarioDB .="</tr>";

while($fila = mysqli_fetch_assoc($resultadoDB)){

$usuarioDB .= "<tr>";    
$usuarioDB .= "<td>" . $fila['nombre'] . "</td>";    
$usuarioDB .= "<td>" . $fila['correo'] . "</td>";    
$usuarioDB .= "</tr>";    
    
    
}



$usuarioDB.="</table>";
    
echo $usuarioDB;
?>