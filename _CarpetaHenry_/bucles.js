var suma = 0;
/*suma = suma + 1;
suma = suma + 2;
suma = suma + 3;
suma = suma + 4;*/

console.log(suma)

for (i=0; i<10; i++){
    suma = suma + i;
    console.log('Variable de iteracino', i);
}
console.log('Variable Suma: ', suma)

while(suma < 3){
    suma = suma + 1;
    console.log(suma)
}