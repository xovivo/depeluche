

function cargarRES() {
let ip = localStorage.getItem('ip');
fetch(ip+'/api/sinvendedor.php')
        .then(function (res) {
            return res.json();
        })
        .then(function (imagenes) {
            let html = '';

            imagenes.forEach(function (imagen) {

                html += `<tbody>
               
                <td><i class="fa fa-user-o"></i> ${imagen.Cliente}</td>
                <td>
                <a href="mailto:${imagen.ClienteCorreo}"><img src="img/mail.png" style="width:30px;padding:5px;"></a>
                <a href="https://wa.me/521${imagen.ClienteTel}"><img style="width:30px; margin:5px;" src="img/whatsapp.png" alt="User Image"></a>
                <a href="tel:+${imagen.ClienteTel}"><img style="width:30px; margin:5px;" src="img/icono_cel.png" alt="User Image"></a></td>
                <td><button onclick="localSS(${imagen.id});" type="button" class="btn btn-default">Atender</button><br><button onclick="verC(${imagen.id});" type="button" class="btn btn-warning">Ver...</button></td>
            </tbody>
                `;
            });
            document.getElementById('resultado').innerHTML = html;
        });
  
  
    }
    cargarRES();

function localSS(idd_) {

    let uus = localStorage.getItem('id_u');
let ip = localStorage.getItem('ip');
    localStorage.setItem('id_c', idd_);

    fetch(ip+'/api/tomarcotizacion.php?aceptar=' + uus + '&idcom=' + idd_)

        .then(resp => resp.json());



    window.location.href = "detalles.html";

}
function verC(idd_) {


    localStorage.setItem('id_c', idd_);
    window.location.href = "detalles.html";

}
