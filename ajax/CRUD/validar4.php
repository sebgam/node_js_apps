<?php
 require "conexion.php";

 $personas = $_GET['personas'];



$nombreID = "nombreID";
$emailID = "emailID";
$actualizar ="actualizar";
$borrar = "borrar";

if($personas=="personas"){
    $resultado = mysqli_query($con, "SELECT * FROM clientes");
    $table = '<table class="table table-striped">';
    $table .= '<tr>';
    $table .= '<th>Usuario</th>';
    $table .= '<th>Nombre</th>';
    $table .= '<th>Email</th>';
    $table .= '<th>Editar usuario</th>';
    $table .= '<th>Borrar usuario</th>';
    $table .= '</tr>';
    
    while($fila = mysqli_fetch_assoc($resultado)){
        
        $table .= '<tr>';
        $table .= '<td>'.$fila['usuario'] . '</td>' ;   
        $table .= '<td id="'.$nombreID.$fila['usuario'].'">'.$fila['nombre'] . '</td>' ;   
        $table .= '<td id="'.$emailID.$fila['usuario'].'">'.$fila['correo'] . '</td>';
        //-----------editar-----
        $table .= '<td><button onclick="editarUsuario(this.id)" id="'.$fila['usuario'].'"  class="btn btn-default">Editar</button></td>';
        //-------------------borrar-----------------
        $table .= '<td><button onclick="borrarUsuario('.$fila['usuario'].')" id="' .$borrar.$fila['usuario']. '"  class="btn btn-danger">Borrar</button></td>';
        //---------------actualizar----------------
        $table .= '<td><button onclick="actualizarUsuarios('.$fila['usuario'].')" id="' .$actualizar.$fila['usuario']. '" class="btn btn-primary" style="display:none;">Actualizar</button></td>';
        
        $table .= '</tr>';
            
    }
    
    $table .= '</table>';
    echo $table;
    mysqli_close($con);

}

if(!empty($_GET['nombreActualizado'])){
    $nombreActualizado=$_GET['nombreActualizado'];
    $usuarioIDActualizado = $_GET['usuarioIDActualizado'];
    $cliente = mysqli_real_escape_string($con,$nombreActualizado);
    mysqli_query($con,"UPDATE clientes SET nombre = '$cliente' WHERE usuario = '$usuarioIDActualizado'");
    mysqli_close($con);
}


if(!empty($_GET['usuarioIDEliminado'])){
    $usuarioIDEliminado = $_GET['usuarioIDEliminado'];
    $resultado = mysqli_query($con, "DELETE FROM clientes WHERE usuario = $usuarioIDEliminado ");
    
    mysqli_close($con);
}

if(!empty($_GET['nuevoUsuario'] ) && !empty($_GET['nuevoEmail'])){
    
   $nuevoUsuario = $_GET['nuevoUsuario'];
   $nuevoEmail = $_GET['nuevoEmail'];
    
    $resultado = mysqli_query($con,"INSERT INTO clientes (nombre,correo) VALUES ('$nuevoUsuario', '$nuevoEmail')");
    
    mysqli_close($con);
    
    
    
    
    
    
}


?>