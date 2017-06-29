<?php

    $personas = array("ACEVEDO JHONG", "DANIEL",
    "AGURTO RONDOY", "MIGUELVICENTE",
    "ALCALÁ NEGRÓN"," CHRISTIAN NELSON",
    "ALMORA HERNANDEZ", "RAUL EDUARDO",
    "ALOSILLA VELAZCO ", "JORGE" ,
    "ALVA CAMPOS", "VICTOR",
    "AREVALO LOPEZ", "JAVIER",
    "ARIAS HERNANDEZ", "ROSARIO",
    "ARROYO RAMÍREZ", "EFRAÍN" ,
    "ALOCEN BARRERA", "MARCO TULIO",
    "BAIOCCHI URETA", "CESAR",
    "BAYLÓN ROJAS", "ISELA FLOR",
    "BEDOYA CASTILLO"," LEONCIA",
    "BEDREGAL CANALES", "LUZ MARINA",
    "BEJAR TORRES", "RAMIRO ALBERTO",
    "BENAVIDES ESPEJO", "JAVIER",
    "BOZA SOLIS", "NELSON",
    "CALLE BETANCOURT", "CIELITO MERCEDES",
    "CARAZA VILLEGAS", "ISABEL FLORISA",
    "CARRERA ABANTO", "GIZELLA",
    "CARRILLO SEGURA", "ESTALINS",
    "CARRIÓN NEIRA", "JORGE AUGUSTO",
    "CASAPIA VALDIVIA", "GUILLERMO" ,
    "CHANCOS MENDOZA"," ZARITA",
    "CHIRINOS LACOTERA", "CARLOS",
    "CORES MORENO"," DORIS",
    "CORTEZ LOZANO", "MARIBEL CORINA",
    "CRISPIN QUISPE", "ANGEL",
    "DE LOAYZA CONTERNO", "ANTONIO ",
    "DIAZ SALINAS", "ANA MARIA");

    $nombre = $_GET['nombre'];
    $sugerencia ="";

    if ($nombre!==""){
        
        $nombre = strtolower($nombre);//----------convierte una cadena minusculas
        $catidadDeCaractares = strlen($nombre);//-------obtiene la magnitus de un string
        
        foreach($personas as $persona){
            
            $nombreEnServidor = substr($persona,0,$catidadDeCaractares);//-------debuelve parte de la cadena
            
            if(stristr($nombre,$nombreEnServidor) !== false){//----insensible a mayusculas y minusculas----
                if($sugerencia === ""){
                    $sugerencia = $persona;
                }else{
                    $sugerencia .= ", $persona";
                }
            }
        }
        
    }

echo $sugerencia === "" ? "No fue encontrado": $sugerencia;

?>