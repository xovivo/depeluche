$("#frmAcceso").on('submit',function(e)
{
	e.preventDefault();
   var logina=$("#logina").val();
   var clavea=$("#clavea").val();

    $.post("ajax/usuario.php?op=verificar",
        {"logina":logina,"clavea":clavea},
        function(data)
    {
        if (data !== "null")
        {
                 localStorage.setItem('login', logina);
                 localStorage.setItem('pass', clavea);
                 window.location.href = "index.html";
        }
        else
        {
            bootbox.alert("Usuario y/o Password incorrectos");
        }
    });
})