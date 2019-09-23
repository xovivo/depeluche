if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js');
}

var btnenviar = $('#enviar');
var us = $('#usuario');
var pas = $('#contrasena');



btnenviar.on('click', function () {

    var par1 = us.val();
    var par2 = pas.val();


    var data = {
        dat: par1,
        pas: par2
    };

    var foto = '';
    var nombre = '';
    var perfil = '';
    var id_ = '';



    fetch('https://ovgsoft.com/rest/index.php/login?rfcinput=' + data.dat + '&passinput=' + data.pas)
        .then(resp => resp.json())
        .then(respObj => {
            console.log(respObj);
            console.log(respObj.email);
            foto = respObj.foto;
            nombre = respObj.nombre;
            perfil = respObj.perfil;
            id_ = respObj.id;

            if (respObj.email !== data.dat) {
                var content = `
                <li class="animated fadeIn fast">
                    <div class="avatar">
                        <img src="">
                    </div>
                    <div class="bubble-container">
                        <div class="bubble">
                            <h3>Error</h3>
                            <br/>
                        Usuario o contraseña no son validos
                        </div>
                        
                        <div class="arrow"></div>
                    </div>
                </li>`;
                let body = document.getElementById('back');
                body.innerHTML = content;

            } else {
                localStorage.setItem('login', us.val());
                localStorage.setItem('foto', foto);
                localStorage.setItem('id_u', id_);
                localStorage.setItem('nombre', nombre);
                localStorage.setItem('perfil', perfil);
                window.location.href = "index.html";
            }







        }).catch(error => {
            console.log('Error en la petición');
            console.log(error);


        });

});



function salirApp() {
    localStorage.removeItem('login');
    localStorage.removeItem('foto');
    localStorage.removeItem('id_u');
    localStorage.removeItem('nombre');
    localStorage.removeItem('perfil');
    window.location.href = "login.html";

};