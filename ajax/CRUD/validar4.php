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
        $table .= '<td><button onclick="editarUsuario(this.id)" id="'.$fila['usuario'].'"  class="btn btn-default">Editar</button></td>';
        $table .= '<td><button id="' .$borrar.$fila['usuario']. '"  class="btn btn-danger">Borrar</button></td>';
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

?>