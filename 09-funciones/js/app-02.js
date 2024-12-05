//crea una funcion a la que se le pase un numero e imprima en la consola su tabla de multiplicar
/**
 * imprimirTabla(1);
 * 1 x 1 = 1
 * 1 x 2 = 2
 * 1 x 3 = 3
 */
 
function imprimirTabla(num) {
  for (let i = 1; i <=10 ; i++) {
    // console.log(`1 x ${i} ${1 * i}`);
  let res = 1 * i;
  console.log("1 x " + i + " = " + res);
  }
 }

// let numero = prompt("Escribe un número");
// imprimirTabla(numero);

function suma(a, b) {
  //return a + b;
  return res;
}

let resultado = suma(1,2);
console.log(resultado);

//escribe una funcion que pase de euros a dolares
function euroToDolar(cantidad){
  const usd = cantidad*1.05
  return usd;
} 

let euros = prompt("introduce cantidad de euros: ")

alert(euroToDolar(euros))

function pedirEuros(){
  let euros = prompt("introduce la cantidad euros: ")
  alert(euroToDolar(euros))
}
