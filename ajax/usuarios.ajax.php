<?php

require_once "../controladores/clientes.controlador.php";
require_once "../modelos/clientes.modelo.php";

class AjaxUsuarios{

  /*=============================================
  ACTIVAR USUARIOS
  =============================================*/	

  public $activarUsuario;
  public $activarId;

  public function ajaxActivarUsuario(){

  	$respuesta = ModeloClientes::ctrEditarCliente("clientes", "verificacion", $this->activarUsuario, "id", $this->activarId);

  	echo $respuesta;

  }

}

/*=============================================
ACTIVAR CATEGORIA
=============================================*/

if(isset($_POST["activarUsuario"])){

	$activarUsuario = new AjaxUsuarios();
	$activarUsuario -> activarUsuario = $_POST["activarUsuario"];
	$activarUsuario -> activarId = $_POST["activarId"];
	$activarUsuario -> ajaxActivarUsuario();

}