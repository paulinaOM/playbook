// Ejemplo 9: Uso del reduce
// arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
// El acumulador acumula el valor devuelto por la función callback. Es el valor acumulado 
// devuelto en la última invocación de callback, o el valorInicial, si se proveyó. 
const numbers9 = [1, 2, 3, 4, 5]
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)