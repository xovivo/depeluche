<?php

require_once "../controladores/ventas.controlador.php";
require_once "../modelos/ventas.modelo.php";

require_once "../controladores/productos.controlador.php";
require_once "../modelos/productos.modelo.php";

require_once "../controladores/usuarios.controlador.php";
require_once "../modelos/usuarios.modelo.php";

class TablaVentas{

  /*=============================================
  MOSTRAR LA TABLA DE VENTAS
  =============================================*/

  public function mostrarTabla(){	

  	$ventas = ControladorVentas::ctrMostrarVentas();

  	if(count($ventas) == 0){

      $datosJson = '{ "data":[]}';

      echo $datosJson;

      return;

    }

  	$datosJson = '{
		 
	 "data": [ ';

	for($i = 0; $i < count($ventas); $i++){

		/*=============================================
		TRAER CLIENTE
		=============================================*/

		$item2 = "id";
		$valor2 = $ventas[$i]["id_usuario"];

		$traerCliente = ControladorUsuarios::ctrMostrarUsuarios($item2, $valor2);

		$cliente = $traerCliente["nombre"];


		if($ventas[$i]["email"] == ""){

			$email = $traerCliente["email"]; 

		}else{

			$email = $ventas[$i]["email"];
	
		}
			$emmail = "<a href='mailto:".$email."><img src='img/mail.png' style='width:30px;padding:5px;'>".$email."</a>";

		/*=============================================
		TRAER PROCESO DE ENVÍO
		=============================================*/

		 if($ventas[$i]["envio"] == 0 ){

			$envio ="<button class='btn btn-danger btn-xs btnEnvio' idVenta='".$ventas[$i]["id"]."' etapa='1'>Despachando el producto</button>";

		}else if($ventas[$i]["envio"] == 1 ){

			$envio = "<button class='btn btn-warning btn-xs btnEnvio' onclick='cotizado(".$ventas[$i]["id"].")' idVenta='".$ventas[$i]["id"]."' etapa='2'>Enviando el producto</button>";

		}else{

			$envio = "<button class='btn btn-success btn-xs'>Producto entregado</button>";
		}

		/*=============================================
		LOGOS PAYPAL Y PAYU
		=============================================*/
		$boton = "<a onclick='localSS(".$ventas[$i]["id"].")' class='btn btn-warning btn-xs'>Ver pedido</a>";
		$whats = "<a href='https://wa.me/521".$ventas[$i]["telefono"]."'>".$ventas[$i]["telefono"]."</a>";
		$llamar = "<a href='tel:".$ventas[$i]["telefono"]."'>".$ventas[$i]["telefono"]."</a>";
		/*=============================================
		DEVOLVER DATOS JSON<a href="mailto:${imagen.ClienteCorreo}"><img src="img/mail.png" style="width:30px;padding:5px;"></a>
		=============================================*/
		$datosJson	 .= '[
			      		"'.$ventas[$i]["nombre"].'",
						 "'.$ventas[$i]["cantidad"].' PZA",
						"$ '.number_format($ventas[$i]["pago"],2).'",
			      		"'.$envio.'",
			      		"'.$boton.'",	
			      		"'.$emmail.'",
			      		"'.$whats.'",
			      		"'.$llamar.'",
			      		"'.$ventas[$i]["fecha"].'"	
			      		],';

	} 

	$datosJson = substr($datosJson, 0, -1);

	$datosJson.=  ']
		  
	}'; 
  	
  	echo $datosJson;	

  }

}

/*=============================================
ACTIVAR TABLA DE VENTAS
=============================================*/ 
$activar = new TablaVentas();
$activar -> mostrarTabla(); 

