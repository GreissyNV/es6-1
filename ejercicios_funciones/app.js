//1
// let num1 = 3
// let num2 = 4
// let result = suma (num1, num2);
// console.log(result);

// //solo hace falta lo de abajo
// function suma(a, b) {
//     return a + b;
//    }
//  alert(suma(3, 4));
// //

 

 //2 
// function getMaxValue(numList) {
//     let max = 0;
//     for(let i =0; i < numList.length; i++) {
//         if(numList[i] > max) {
//             max = numList[i];
//         }
//     }
//     return max;
// }

// const lista = [2,5,65,34,1];
// let numMax = getMaxValue(lista);


//3
// function cuentaVocales(frase) {
//     let numVocales = 0;
//     const vocales = "aeiouAEIOU";

//  for (let i = 0; i < frase.length; i++) {
//    for (let j = 0; j < vocales.length; j++) {
//      if (frase[i] === vocales[j]) {
//       numVocales++;
//       break;
//      }
//    }
//  }
//  return numVocales;
// }
// console.log(cuentaVocales("calabaza"));


//4
// debugger
// function minusToMayus(lista) {
//     const mayus = []
//     for (let i = 0; i< lista.length; i++) {
//         const element = lista[i];
//        mayus.push(element.toUpperCase());
//     }
//     return mayus;
// }

// const deportes = ["futbol", "tenis", "padel"]
// console.log(minusToMayus(deportes)); // ["FUTBOL", "TENIS"; "PADEL"]

//8
// function numCuadrado(listaNum) {
// const listaNumCuadrado = []
// for (let i = 0; i < lista.length; i++) {
//     const element = listaNum[i];
//     const cuadrado = element * element;
//     listaNumCuadrado.push(cuadrado);
//  }
// return listaNumCuadrado;
// }

// const nuevaLista = lista.map((n) => n * n);

//9 Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
//"este fin de semana hay puente" -> ["este", "fin", "de", "semana", "hay", "puente"]
// Hay algun metodo de strings que convierta a array por un delimitador? ""
//Hay algun metodo de array que invierta su orden?
//hay algun metodo a array que lo convierta a string usando un conector?

//Resultado: "puente hay semana de fin este"

function reverseWordsColl(text) {
    const texArr = text.split(" ").reverse().join(" ");
  } 
  



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


