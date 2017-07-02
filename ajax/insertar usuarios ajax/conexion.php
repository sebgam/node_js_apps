<?php

    $mysql_host = "localhost";
    $mysql_usuario = "root";
    $mysql_clave = "clave.123";
    $mysql_db ='pruebas';

     $con = mysqli_connect($mysql_host,$mysql_usuario, $mysql_clave, $mysql_db);

    if(mysqli_connect_errno()){
        echo "error en conexion : " . mysql_connect_error();
    }
   
?>