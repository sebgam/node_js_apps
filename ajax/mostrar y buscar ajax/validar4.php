<?php
 require "conexion.php";

 
if(!empty($_GET['nombre'])){
    
    $nombre = $_GET['nombre'];
    $cliente = mysqli_real_escape_string($con,$nombre);
    $resultado = mysqli_query($con,"SELECT * FROM clientes WHERE nombre LIKE '%" . $cliente . "%'");
    
    while($fila = mysqli_fetch_assoc($resultado)){
        echo "<li class='nombres list-group-item btn btn-lg' onclick='mostrarUsuario(this)' data-toggle='modal' data-target='#myModal'>" .  $fila['nombre'] . "</li>" ;
        echo "<input type ='hidden' value='" . $fila['correo'] ."'>";
    }
    mysqli_close($con);
    
}else{
    mostrarUsuarios();
}




function mostrarUsuarios(){
    
    require "conexion.php";

    $resultado = mysqli_query($con, "SELECT * FROM clientes");

    while($fila = mysqli_fetch_assoc($resultado)){
    
        echo "<li class='nombres list-group-item btn btn-lg' onclick='mostrarUsuario(this)' data-toggle='modal' data-target='#myModal'>" .  $fila['nombre'] . "</li>" ;
        echo "<input type ='hidden' value='" . $fila['correo'] ."'>";
}

mysqli_close($con);
}

?>