<?php
require "conexion.php";

$usuario = $_GET['usuario'];
$usuario = (int)$usuario;

 $resultadoDB = mysqli_query($con, "SELECT * FROM clientes WHERE usuario = $usuario ");

$usuarioDB = "";
$usuarioDB .= "<table class='table table-bordered'>";
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