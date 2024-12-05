//1
let num1 = 3
let num2 = 4
let result = suma (num1, num2);
console.log(result);

//solo hace falta lo de abajo
function suma(a, b) {
    return a + b;
   }
 alert(suma(3, 4));
//

 debugger

 //2 
function getMaxValue(numList) {
    let max = 0;
    for(let i =0; i < numList.length; i++) {
        if(numList[i] > max) {
            max = numList[i];
        }
    }
    return max;
}

const lista = [2,5,65,34,1];
let numMax = getMaxValue(lista);


//3
function cuentaVocales(frase) {
    let numVocales = 0;
    const vocales = "aeiouAEIOU";

 for (let i = 0; i < frase.length; i++) {
   for (let j = 0; j < vocales.length; j++) {
     if (frase[i] === vocales[j]) {
      numVocales++;
      break;
     }
   }
 }
 return numVocales;
}




// function contarVocales(cadena) { let cuenta = 0; const vocales = 'aeiouAEIOU'; 
//     for (let i = 0; i < cadena.length; i++) { 
//         if (vocales.indexOf(cadena[i]) !== -1) { cuenta++; } } return cuenta; }
// let cadena = "hola, ¿como estas?"; 
// console.log("El número de vocales es:", contarVocales(cadena));

//4
// function convertirAMayusculas(array) {
//     return array.map(function(cadena) {
//         return cadena.toUpperCase();
//     });
// }

// let arrayDeStrings = ["hola", "mundo", "javascript", "es", "genial"];
// let arrayEnMayusculas = convertirAMayusculas(arrayDeStrings);
// console.log(arrayEnMayusculas);


//5
// function esPrimo(numero) {
//     if (numero <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//         if (numero % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// let numero = 7;
// console.log("El número", numero, "es primo:", esPrimo(numero));


