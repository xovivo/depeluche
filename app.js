
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('sw.js');
}
$(window).on('load', function () {



var menuapp = `
        <header class="main-header header_fixed">
            <a href="#" class="logo">
                <span class="logo-mini"><img src="images/favicon.ico" style="width: 100%;"></span>
                <span class="logo-lg"><img src="img/logo.png" style="width: 100%;"></span>
            </a>
            <nav class="navbar navbar-static-top" role="navigation">
                <a href="#" id="navUsern"  class="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span class="sr-only"></span>
                </a>
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <li class="dropdown user-menu"><a href="#" id="navUserName"><span></span></a></li>
                        <li class="dropdown user-menu">
                            <a href="#" id="navUser"  data-toggle="offcanvas">
                                <img src="images/favicon.ico" class="user-image" alt="User Image">
                                <span class="hidden-xs"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="user-header" >
                                    <img src="images/icons/icon-128x128.png" class="img-circle"
                                        alt="User Image">
                                    <p><small></small></p>
                                </li>
                                <li class="user-footer">
                                    <div class="pull-right">
                                        <a href="#" class="btn btn-default btn-flat">Cerrar</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
      </header>
      <aside class="main-sidebar">
                <section class="sidebar">
                    <ul class="sidebar-menu">
                        <li class="header"></li>
                    <li>
                      <a href="index.html">
                        <i class="fa fa-th"></i><span>Tablero</span>
                      </a>
                    </li>
                            
                            <li><a href="ventas.html"><i class="fa fa-circle-o"></i> Pedidos</a></li>
                            <li><a href="venta.html"><i class="fa fa-circle-o"></i> Realizar la venta</a></li>
                            <li><a href="cliente_tabla.html"><i class="fa fa-circle-o"></i> Cliente</a></li>
       
                
                            
                    <li><a href="usuarios.html"><i class="fa fa-circle-o"></i> Usuarios</a></li>
                        
                        

                   

                    <li><a href="ventasfechacliente.html"><i class="fa fa-circle-o"></i> Ventas</a></li>
                      
                      <li>
                          <a href="#" onclick="salirApp();">
                            <i class="fa fa-info-circle salir"></i> <span class="salir">Salir..</span>
                            <small class="label pull-right bg-red salir">Close</small>
                          </a>
                        </li>
                    </ul>
                </section>
            </aside>
            <div class="sidebar-footer hidden-lg hidden-md hidden-xs" style="width: 100%;">
              <a href="productos.html">
               <i class="fa fa-paw"></i>
              </a>
              <a href="cliente_tabla.html" >
                <i class="fa fa-users"></i>
              </a>
              <a href="index.html" class="animate">
                 <i class="fa fa-tachometer"></i>
              </a>
              <a class="animate" href="ventas.html">
                 <i class="fa fa-shopping-cart"></i>
              </a>
              <a href="#" class="animate">
                 <i class="fa fa-cogs"></i>
              </a>
            </div>`;


            var footer = `<footer class="main-footer">
                            <div class="pull-right hidden-xs">
                            <b></b>
                            </div>
                            <strong> </strong>
                        </footer>
                        `;

                let body = document.getElementById('menuu');
                body.innerHTML = menuapp;
                let foter = document.getElementById('fuder');
                foter.innerHTML = footer;                
                localStorage.setItem('ip', 'https://dpeluche.com');

});



function salirApp() {
 localStorage.removeItem('login');
 localStorage.removeItem('foto');
 localStorage.removeItem('id_u');
 localStorage.removeItem('nombre');
 localStorage.removeItem('perfil');
 window.location.href = "login.html";

}