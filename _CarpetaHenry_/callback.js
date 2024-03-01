var devuelvoUsuario = function (){
    return 'camilo';
}

var devuelvoSaludo = function () {
    return 'hola';
}

var saludar = function(cb1, cb2){ //cb1= a callback
    return cb1() + ' ' + cb2();
}

var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
console.log(resultado)