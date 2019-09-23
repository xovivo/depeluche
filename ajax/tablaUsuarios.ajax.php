<?php

require_once "../controladores/clientes.controlador.php";
require_once "../modelos/clientes.modelo.php";
require_once "../modelos/rutas.php";

class TablaUsuarios{

 	/*=============================================
  	MOSTRAR LA TABLA DE USUARIOS
  	=============================================*/ 

	public function mostrarTabla(){	

		$item = null;
 		$valor = null;

 		$usuarios = ControladorClientes::ctrMostrarClientes($item, $valor);
		
 		$url = Ruta::ctrRuta();

		$url = $url."img/usuarios/"; 		

 		if(count($usuarios) == 0){

	      $datosJson = '{ "data":[]}';

	      echo $datosJson;

	      return;

	    }

 		$datosJson = '{
		 
	 	"data": [ ';

	 	for($i = 0; $i < count($usuarios); $i++){

	 		/*=============================================
			TRAER FOTO USUARIO
			=============================================*/

			if($usuarios[$i]["foto"] != ""  && $usuarios[$i]["modo"] == "directo"){

				$foto = "<img class='img-circle' src='".$url.$usuarios[$i]["foto"]."' width='60px'>";

			}else if($usuarios[$i]["foto"] != "" && $usuarios[$i]["modo"] != "directo"){

				$foto = "<img class='img-circle' src='".$usuarios[$i]["foto"]."' width='60px'>";

			}else{

				$foto = "<img class='img-circle' src='vistas/img/usuarios/default/anonymous.png' width='60px'>";
			}

			/*=============================================
  			REVISAR ESTADO
  			=============================================*/

  			if($usuarios[$i]["modo"] == "directo"){

	  			if( $usuarios[$i]["verificacion"] == 1){

	  				$colorEstado = "btn-danger";
	  				$textoEstado = "Desactivado";
	  				$estadoUsuario = 0;

	  			}else{

	  				$colorEstado = "btn-success";
	  				$textoEstado = "Activado";
	  				$estadoUsuario = 1;

	  			}

	  			$estado = "<button class='btn btn-xs btnActivar ".$colorEstado."' idUsuario='". $usuarios[$i]["id"]."' estadoUsuario='".$estadoUsuario."'>".$textoEstado."</button>";

	  		}else{

	  			$estado = "<button class='btn btn-xs btn-info'>Activado</button>";

	  		}

			    $correo = "<a href='mailto:".$usuarios[$i]["email"]."'><img style='width:30px; margin:5px;' src='img/mail.png'></a>"; 
			    $whats = "<a href='https://wa.me/521".$usuarios[$i]["telefono"]."'><img style='width:30px; margin:5px;' src='img/w.png'></a>";
				$phone = "<a href='tel:+".$usuarios[$i]["telefono"]."'><img style='width:30px; margin:5px;' src='img/tel.png'></a>"; 
	
	 		/*=============================================
			DEVOLVER DATOS JSON
			=============================================*/

			$datosJson	 .= '[
				      "'.($i+1).'",
				      "'.$usuarios[$i]["nombre"]. '",
					  "'.$correo.'",
					  "'.$whats.'",
					  "'.$phone.'",
				      "'.$usuarios[$i]["modo"].'",
					  "'.$foto.'",
				      "'.$estado.'",
				      "'.$usuarios[$i]["fecha"].'"    
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
$activar = new TablaUsuarios();
$activar -> mostrarTabla();



