<?php

class Conexion{

	static public function conectar(){

		// $link = new PDO("mysql:host=localhost;dbname=ecommerce_db",
		// 				"root",
		// 				"",
		// 				array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
		//                       PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
		// 				);
	$link = new PDO("mysql:host=dpeluche.com;dbname=dpeluche_ecommerce_db",
						"dpeluche",
						"Dp3lucH3$$$",
						array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
		                      PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
						);
		return $link;

	}


}



