let ip = localStorage.getItem('ip');


     fetch(ip+'/api/sinvendedor.php')

         .then(function (res) {

             return res.json();

         })

         .then(function (imagenes) {

             let html = '';

             let arreglo = '';

            let prod = '';

             imagenes.forEach(function (imagen) {

                  arreglo = JSON.parse(imagen.productos);

                    for (var i = arreglo.length - 1; i >= 0; i--) {

                        

                       prod += `<img style="width:10%; margin: 5px; border-radius: 10%; box-shadow: .5px -.5px .5px .5px #BDB7B7; " src="https://gipromo.com.mx/${arreglo[i]['imagen']}">`;

                    }

                    html += `<div class="container">

	

	<div class="row">

		<div class="col-sm-8">

            <div class="col-sm-6" style="margin:5px; border-radius: 2%; box-shadow: 1px -1px 1px 1px #BDB7B7; ">
            <div class="col-sm-12" style="margin:5px; ">
            <p><span>Cliente: ${imagen.Cliente}</span><span style="float:right; color:red;"> ${imagen.fecha}</span></p>

				<a href="tel:+${imagen.ClienteTel}"><img style="width:30px; margin:5px;" src="img/icono_cel.png" alt="User Image"></a>

				<a href="mailto:${imagen.ClienteCorreo}"><img style="width:30px; margin:5px;" src="img/icono_mail.png" alt="User Image"></a>

				<a href="https://wa.me/${imagen.ClienteTel}" ><img style="width:30px; margin:5px; cursor:pointer;" src="img/whatsapp.png"></a>
            
                <a onclick="localS(${imagen.id});"><img style="width:30px; margin:5px; cursor:pointer;" src="img/ic_calendar.png"></a>

                </div>
            <div class="col-sm-12" style="margin:5px;">

               
				<div  id="${imagen.id}" class="col-sm-12">

					<p>${imagen.Mensaje}</p>

					${prod}

			

				</div>
                </div>
			</div>

		</div>

	</div>

</div>`;

prod='';





             });

             document.getElementById("item").innerHTML = html;

         });





function localS(idd_){

    let uus = localStorage.getItem('id_u');

    localStorage.setItem('id_c', idd_);
let ip = localStorage.getItem('ip');
     fetch(ip+'/api/tomarcotizacion.php?aceptar=' + uus + '&idcom=' + idd_)

         .then(resp => resp.json());



         window.location.href = "detalles.html";

}

