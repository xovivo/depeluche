var ip = localStorage.getItem('ip');
var login = localStorage.getItem('login');
if (login === null) {
  window.location.href = "login.html";
}

$(window).on('load', function () {

     fetch('https://dpeluche.com/api/totales.php')
         .then(function (res) {
             return res.json();
         })
         .then(function (imagenes) {
             var pagIndex = '';
             imagenes.forEach(function (imagen) {


                pagIndex = `<section class="content">
        <div class="row">
          <div class="col-lg-3 col-xs-6">
            <div class="small-box bg-aqua">
              <div class="inner">
                <h3 id="var4">${imagen.total}</h3>
                <p>Recibidas</p>
              </div>
              <div class="icon">
                <i class="ion ion-social-usd"></i>
              </div>
              <a href="#" class="small-box-footer">
                Más info <i class="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-xs-6">
            <div class="small-box bg-green">
              <div class="inner">
                <h3 id="var1">${imagen.cotizada}</h3>
                <p>Cotizada</p>
              </div>
              <div class="icon">
                <i class="ion ion-clipboard"></i>
              </div>
              <a href="#" class="small-box-footer">
                Más info <i class="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-xs-6">
            <div class="small-box bg-yellow">
              <div class="inner">
                <h3 id="var2">${imagen.pendiente}</h3>
                <p>En proceso</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>
              <a href="#" class="small-box-footer">
                Más info <i class="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-xs-6">
            <div class="small-box bg-red">
              <div class="inner">
                <h3 id="var3">${imagen.sincontestar}</h3>
                <p>Sin vendedor</p>
              </div>
              <div class="icon">
                <i class="ion ion-ios-cart"></i>
              </div>
              <a href="#" class="small-box-footer">
                Más info <i class="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
       <div class="col-lg-12 col-xs-12">
                <div id="pedidos"></div>
        </div>
        </div>
      </section>`;
    
      $('.pagIndex').html(pagIndex);
    });
});

          fetch('https://dpeluche.com/api/pedidoos.php')
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

                  prod += `<div class="box box-danger">
               
                     <h3 class="box-title">${arreglo[i]["titulo"]}</h3>
           
                     <ul class="products-list product-list-in-box">
                         <li class="item">
                             <div class="product-img">
                                 <img src="https://dpeluche.com/backend/${arreglo[i]["imagen"]}" alt="Product Image">
                             </div>
                             <div class="product-info">
                                 <a href="javascript:void(0)" class="product-title">
                                     <span class="label label-warning pull-right">${arreglo[i]["cantidad"]} pza</span></a>
                             </div>
                         </li>
                     </ul>
               
             </div>`;
                }
                html += `<div class="box-header with-border col-xs-12 col-sm-12 col-md-5 col-lg-5">
             
                     <a href="https://wa.me/521${imagen.ClienteTel}"><img style="width:30px; margin-bottom:10px;" src="img/whatsapp.png"
                             alt="User Image"></a>
                
                     <a href="tel:${imagen.ClienteTel}"><img style="width:30px; margin-bottom:10px;" src="img/icono_cel.png"
                             alt="User Image"></a>
                     <a href="mailto:${imagen.ClienteCorreo}"><img style="width:30px; margin-bottom:10px;" src="img/icono_mail.png"
                             alt="User Image"></a>
               
     
                 <table class="table table-bordered table-striped dt-responsive tablaVentas" width="100%">
                  <tbody>
                    <tr>
                      <td><span>Cliente:</span></th>
                      <td><span>${imagen.Cliente}</span></th>
                    </tr>
                    <tr>
                      <td><span>Fecha:</span></th>
                      <td><span>${imagen.fecha}</span></th>
                    </tr>
                    <tr>
                      <td><span>Correo:</span></th>
                      <td><span>${imagen.ClienteCorreo}</span></th>
                    </tr>
                    <tr>
                      <td><span>Telefono:</span></th>
                      <td><span>${imagen.ClienteTel}</span></th>
                    </tr>
                    <tr>
                      <td><span>Mensaje:</span></th>
                      <td>${imagen.Mensaje}</th>
                    </tr>
                     <tr>
                      <td><span>Peluches:</span></th>
                     <td>${prod}</td>
                    </tr>
                    </tbody>
                </table>

            </div>`;
                prod = '';
             $('#pedidos').html(html);
              });

             
            });



});
