<?php

class Ruta{

	/*=============================================
	RUTA LADO DEL CLIENTE
	=============================================*/	
	static public function ctrRuta(){
$localIP =  "localhost"; //getHostByName(getHostName());
		return "http://".$localIP. "/dpeluche/frontend/";
		// return "https://ovgsoft.com/depeluche/crm/";
	
	}

	/*=============================================
	RUTA LADO DEL SERVIDOR
	=============================================*/	

	static public function ctrRutaServidor(){
$localIP = "localhost"; //getHostByName(getHostName());

		return "http://".$localIP. "/dpeluche/backend/";
		// return "https://ovgsoft.com/depeluche/crm-da/";
	
	}


}