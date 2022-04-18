// Ejemplo 7: Uso de filter para filtrar una lista de elementos
// Array.filter() Crea un nuevo array con todos los elementos que cumplan la condición implementada 
// por la función dada.
// var newArray = arr.filter(callback(currentValue))
// callback:  Retorna true si el elemento la cumple o en caso contrario retornará false

const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => // esta es una función
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log("Ejemplo 7: Paises que terminan en i")
console.log(countriesEndsByia)