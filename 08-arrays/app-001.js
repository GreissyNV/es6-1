//Arrays literal
const numberList = [12, 34, 56, 79, 98];
const mix = [12, "hola", true, null];

//Constructor 
//const frutas = new Array("Manzanas", "Pera", "Naranja");
let frutas = ["Manzana", "Pera", "Naranja"];
console.log(typeof frutas);

let x;
//Obtener el valor de un elemento del array
x = numberList[3];
x = numberList[1] + numberList[3];
x = `Mi fruta preferida es ${frutas[2]}`;
x = frutas.length;
frutas[0] = "fresa";
frutas[frutas.length] = ["piña", "melón"];
frutas[frutas.length] = "cacahuetes";

frutas.unshift("Sandia");

console.log(frutas);
console.log(typeof frutas);
