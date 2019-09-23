 function cargarPor() {
let ip = localStorage.getItem('ip');
     fetch(ip+'/api/guia.php')
         .then(function (res) {
             return res.json();
         })
         .then(function (imagenes) {
             let html = '';

             imagenes.forEach(function (imagen) {

                 html += `<li>
                           <h4><img style="width:30px; border-radius:50%; margin-left:20px;" src="files/usuarios/${imagen.foto}" alt="User Image"><span style="margin-left:30px;">${imagen.nombre} </span>  <span class="pull-right text-red" style="font-size:20px; margin:10px 30px 0px 0px;">${imagen.atendidas}</span></h4>
                         </li>`;
             });
             
             document.getElementById('logro').innerHTML = html;
         });
 }
 cargarPor();