 function cargarRES() {
let ip = localStorage.getItem('ip');

    fetch(ip+'/api/usuarios.php')
        .then(function (res) {
            return res.json();
        })
        .then(function (imagenes) {
            var html = '';

            imagenes.forEach(function (imagen) {

                html += `<tbody>
                <td>${imagen.nombre}</td>
                <td><a href="tel:+${imagen.telefono}"><img style="width:30px; margin:5px;" src="img/tel.png" alt="User Image"></a></td>
                <td><a href="https://wa.me/${imagen.telefono}"><img style="width:30px; margin:5px;" src="img/whatsapp.png" alt="User Image"></a></td>
                <td><a href="mailto:${imagen.email}"><img style="width:30px; margin:5px;" src="img/mail.png" alt="User Image"></a></td>
                <td><img src="files/usuarios/${imagen.foto}" style="border-radius:50%; height:30px; width:30px;"></td>
                </tbody>`;
            });
            document.getElementById('resultado').innerHTML = html;
        });
    }
    cargarRES();
    