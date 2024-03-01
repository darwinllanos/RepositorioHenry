/*var personas = {
    nombre: "Jhon Darwin Llanos Narvaez",
    edad: "23",
    correo: "jhondarwinllanosnarvaez@gmail.com"
}

personas.nombre = "Jhon Llanos";
console.log(personas.nombre)*/

//Porque es importante el Bracket notation
/*var comida = {};
var diferenciaDeNotaciones = function (propUno, propDos){
    comidas.propUno = ['Frutas', 'Vegetales']; //No va a funcionar con Sot-notation
    comidas[porpDos] = ['Hamburguea', 'Papas Fritas']; //Si va a funcionar con Bracket-Notation
};
diferenciaDeNotaciones('Saludable', 'NoSaludable');
console.log(comida)*/

//Recorrer un objeto con el ciclo for
var equipoJugador = {barca: 'Messi', realMadrid: 'cr7'};
for(var jugador in equipoJugador){
    console.log('Esta es la propiedad :' + jugador)
    console.log('Este es el valor:' + equipoJugador[jugador])
}