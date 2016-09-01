<?php
$datos=array('Halo Wars 2 $1000','Halo 5 $900','Halo 5 Legendary Edition $5000');
$chec=$_REQUEST['id'];
if($chec=="h2")
	echo $datos[0];
elseif($chec=="h5")
	echo $datos[1];
elseif($chec=="h5l")
	echo $datos[2];
?>
