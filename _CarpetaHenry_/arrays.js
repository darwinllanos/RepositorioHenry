/*var numero = [9, 6, 6, 5];
var cumpleCondicion = numero.every((num) => {
    return num > 5;
})

console.log(cumpleCondicion)*/

var palabra = "henri";
var palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push("y");
//console.log(palabraSeparada);
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

var numerosLista = [1,2,3,4];
numerosLista.forEach((num) => console.log(num));

var masUno = numeros.map((num) => {
    return num + 1;
})