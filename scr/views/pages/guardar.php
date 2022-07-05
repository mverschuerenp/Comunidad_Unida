<?php
    //conectamos con el servidor
    $conectar=mysql_connect('localhost','root','')
    //verificamos la conexión
    if (!$conectar){
        echo"No se pudo conectar con el servidor";
    } else {
        $base=mysql_select_db('prueba');
        if(!$base){
            echo"No se encontro la base de datos";
        }
    }
    //recuperar variables 
    $nombre=$_POST['nombre'];
    $depto=$_POST['depto'];
    $espaciocomun=$_POST['espaciocomun'];
    $diasemana=$_POST['diasemana'];
    $hora=$_POST['hora'];
    $cuantashoras=$_POST['cuantashoras'];
    $mail=$_POST['mail'];
    //hacemos la sentencia de sql
    $sql="INSERT INTO datos VALUES('$nombre','$depto','$espaciocomun','$diasemana','$hora','$cuantashoras','$mail')";
    //Ejecutamos la sentencia de sql
    $ejecutar=mysql_query($sql);
    //Verificamos la ejecución
    if(!$ejecutar){
        echo"Hubo algun error";
    } else {
        echo"Datos guardados correctamente <br> <a href='reserva_usuario.ejs'>Volver</a>";
    }

?>