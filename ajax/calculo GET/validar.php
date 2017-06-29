<?php

$num1 = $_GET['num1'];
$num2 = $_GET['num2'];

$respuesta = "";

if(!ctype_digit($num1) || !ctype_digit($num2)){
    $respuesta = "porfavor ingrese dos numeros";
}else{
    $respuesta .= "<table>";
    $respuesta .= "<tr><td>". $num1. " + " . $num2 . " = " . ($num1+$num2) . "</td></tr>";
    $respuesta .= "<tr><td>". $num1. " - " . $num2 . " = " . ($num1-$num2) . "</td></tr>";
    $respuesta .= "<tr><td>". $num1. " x " . $num2 . " = " . ($num1*$num2) . "</td></tr>";
    $respuesta .= "<tr><td>". $num1. " / " . $num2 . " = " . ($num1/$num2) . "</td></tr>";
    $respuesta .= "<table>";
}

echo $respuesta;


?>