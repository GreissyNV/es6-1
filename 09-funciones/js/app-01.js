// Declaracion de una funcion
function sumar() {
  console.log(2 + 3);
}

//Ejecutar la funcion o llamarla
sumar();

//Funcion con parametros
function suma(num1, num2) {
  console.log(num1 + num2);
}

sumar(3, 4);

//crea una funcion que le pasemos un nombre como parametro y lance un alert diciendo hola saludo
debugger

// saludo("Mario", "Bros");

const nombre = prompt("Escribe tu nombre");
const apellido = prompt("Escribe tu apellido");
saludo(nombre, apellido);

//hoisting
function saludo(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`);
}


//crea una funcion a la que se le pase un numero e imprima en la concola su tabla de multiplicar


