function validarCorreo(mail){
    var correcto= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;                         
    var esValido= correcto.test(mail);
    if (esValido==true){
        alert("el correo es valido");
    }
    else{
        alert('El correo NO es valido');

    }
}