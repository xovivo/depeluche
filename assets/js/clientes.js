$('.tablas').DataTable( {
    "deferRender": true,
  "retrieve": true,
  "processing": true,
   "language": {

      "sProcessing":     "Procesando...",
      "sLengthMenu":     "Mostrar _MENU_ registros",
      "sZeroRecords":    "No se encontraron resultados",
      "sEmptyTable":     "Ningún dato disponible en esta tabla",
      "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
      "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
      "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
      "sInfoPostFix":    "",
      "sSearch":         "Buscar:",
      "sUrl":            "",
      "sInfoThousands":  ",",
      "sLoadingRecords": "Cargando...",
      "oPaginate": {
      "sFirst":    "Primero",
      "sLast":     "Último",
      "sNext":     "Siguiente",
      "sPrevious": "Anterior"
      },
      "oAria": {
        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
      }

  }

} );



/*=============================================
EDITAR CLIENTE
=============================================*/
$(".tablas").on("click", ".btnEditarCliente", function(){

	var idCliente = $(this).attr("idCliente");

	var datos = new FormData();
    datos.append("idCliente", idCliente);

    $.ajax({

      url:"ajax/clientes.ajax.php",
      method: "POST",
      data: datos,
      cache: false,
      contentType: false,
      processData: false,
      dataType:"json",
      success:function(respuesta){
      
      	   $("#idCliente").val(respuesta["id"]);
         $("#editarDocumentoId").val(respuesta["documento"]);
          $("#editarDocumentoCompaq").val(respuesta["ClaveCompaq"]);
	       $("#editarCliente").val(respuesta["nombre"]);
         $("#editarContacto").val(respuesta["contacto"]);
	       $("#editarEmail").val(respuesta["email"]);
	       $("#editarTelefono").val(respuesta["telefono"]);
	       $("#editarDireccion").val(respuesta["direccion"]);
         $("#editarCP").val(respuesta["codigop"]);
         $("#editarRazonsocial").val(respuesta["razon_social"]);
         $("#editarRFC").val(respuesta["rfc"]);
         $("#editarFactura").val(respuesta["factura"]);
         $("#editarTipodepago").val(respuesta["creditoOprepago"]);
         $("#editarPrecioTerrestre").val(respuesta["serTerrestreOGuia"]);
         $("#editarKgTerrestre").val(respuesta["kgTerrestreAmparo"]);
         $("#editarKgPrecioTerrestre").val(respuesta["cosKgExcesoTerrestre"]);
         $("#editarPrecioAereo").val(respuesta["servAereo"]);
         $("#editarKgAereo").val(respuesta["kgAereoAmparo"]);
         $("#editarKgPrecioAereo").val(respuesta["cosKgExcesoAereo"]);

	  }

  	})

})

/*=============================================
ELIMINAR CLIENTE
=============================================*/
$(".tablas").on("click", ".btnEliminarCliente", function(){

	var idCliente = $(this).attr("idCliente");
	
	swal({
        title: '¿Está seguro de borrar el cliente?',
        text: "¡Si no lo está puede cancelar la acción!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, borrar cliente!'
      }).then(function(result){
        if (result.value) {
          
            window.location = "index.php?ruta=client&idCliente="+idCliente;
        }

  })

})