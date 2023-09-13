function correo(n, idError){
    var error01 = document.querySelector(idError);

        if(n.value === ""){
            error01.innerHTML = "El campo no puede estar vacio";
            return false
        }
        else{
            var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if(re.test(n.value) === true){
            error01.innerHTML = "";
            return true;
            }
            else{
                error01.innerHTML = "El campo no puede estar vacio" 
                return false;
            }
        }
}

function password(c, idError) {
    var error02 = document.querySelector(idError);

    if (c.value === "") {
        error02.innerHTML = "El campo no puede estar vacío";
        return false;
    } else {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (re.test(c.value) === true) {
            error02.innerHTML = "";
            return true;
        } else {
            error02.innerHTML = "La contraseña no cumple los requisitos";
            return false;
        }
    }
}


function validar(event) {
    var mail = document.getElementById("mail");//llamamos y guardamos atributo
    var pwd = document.getElementById("password");//llamamos y guardamos atributo

    var a = correo(mail);//llamamos y guardamos funcion
    var b = contraseña(pwd);//llamamos y guardamos funcion



    if(a == false || b == false) {
            event.preventDefault();
        }

}