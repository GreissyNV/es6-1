//Metodos arrays
let x;
const arr = [28,34,56,73,890,55];
// Añadir un elemento al final
// arr[arr.length] = 34;
arr.push(100, 20, 44);
arr.pop(); // Elimina el ultimo elemento
arr.unshift(2000) //Añade al principio
arr.shift(); // Quita el primer elemento
//arr.reverse(); // Para invertir

x = arr.includes(103);
x = arr.indexOf(344); //si añadimos algo que no es verdad nos contestara -1 pero no debemos hacerlo
//x = arr;
console.log(x);
console.log(arr);
