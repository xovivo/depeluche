


let ip = localStorage.getItem('ip');
    fetch(ip+'/api/cotizaciones.php')

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

     prod += `<div class="box box-primary">
      <div class="box-header with-border">

          <h3 class="box-title">${arreglo[i]['titulo']}</h3>

          <div class="box-tools pull-right">

              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>

          </div>

      </div>
      <div class="box-body">
          <ul class="products-list product-list-in-box">
              <li class="item">
                  <div class="product-img">
                      <img src="https://${ip}/${arreglo[i]["imagen"]}" alt="Product Image">
                  </div>
                  <div class="product-info">
                      <a href="javascript:void(0)" class="product-title">
                          <span class="label label-warning pull-right">${arreglo[i]["cantidad"]} pza</span></a>
                      <span class="product-description">
                          ${arreglo[i]["idProducto"]}
                      </span>
                  </div>
              </li>
          </ul>
      </div>
      <div class="box-footer text-center">
          <a href="productos" class="uppercase">Ver todos los productos</a>
      </div>
  </div>`;
 }

                html += `<div class="col-xs-12" style="border:0.5px solid blue; margin:5px;">

                          <div class="col-xs-3">

                        <img style="width:50px; border-radius:50%;" src="files/usuarios/${imagen.Foto}" class="user-image" alt="User Image"><span class="hidden-xs"></span>

                          </div>

                          <div class="col-xs-3">

                          <p>${imagen.Vendedor}</p>

                          </div>

                          <div class="col-xs-3" style="border:1px solid black; background:#C0CB66;">

                          

                          <a href="tel:+${imagen.ClienteTel}"><img style="width:20px; margin:10px;" src="img/icono_cel.png" alt="User Image"></a>

                          </div>

                          <div class="col-xs-3" style="border:1px solid black; background:#66CB79;">

                          <a href="mailto:${imagen.ClienteCorreo}"><img style="width:20px; margin:10px;" src="img/icono_mail.png" alt="User Image"></a>

                          </div>

                          

                          

                          <div class="col-xs-6" style="width:100%; color:black; font-size:16px;">

                          <span style="width:100%; color:blue; border-bottom:1px solid black;">Cliente: ${imagen.Cliente}</span><br>

                          <span style="width:100%; color:blue; border-bottom:1px solid black;">Fecha: ${imagen.fecha}</span><br>

                          <span style="color:#66CB79; font-size:12px; border-bottom:1px solid black;">Correo: ${imagen.ClienteCorreo}</span><br>

                          <span style="color:#C0CB66; font-size:20px; border-bottom:1px solid black;">Telefono: ${imagen.ClienteTel}</span><br>

                          <p>${imagen.Mensaje}</p> 
                            ${prod}
                          </div></div><hr/>`;
                           

                    prod = '';
             });



            document.getElementById('item').innerHTML = html;

        });





