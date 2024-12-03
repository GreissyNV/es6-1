//Metodos arrays
let x;
const arr = [28,34,56,73,890,55];
// Añadir un elemento al final
// arr[arr.length] = 34;
// arr.push(100, 20, 44);
// arr.pop(); // Elimina el ultimo elemento
// arr.unshift(2000) //Añade al principio
// arr.shift(); // Quita el primer elemento

// //arr.reverse(); // Para invertir
// x = arr.includes(103);
// x = arr.indexOf(34); //si añadimos algo que no es verdad nos contestara -1 pero no debemos hacerlo
// x = arr.toString(); // lo convierte a texto
// x = arr.join("-");
// x = arr.slice(1, 4);
// x = arr.splice(1, 4)

//x = arr;

// Podemos encadenar metodosdependiendo del valor devuelto
x = arr.slice(1, 4).reverse().toString().charAt(0);

//foreach, map, redice, filter...

console.log(x);


