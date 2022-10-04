/* Crea una función llamada findArrayIndex que reciba como parametros un array
de textos y un texto y devuelve la posición del array cuando el valor del array
sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos. */

let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    if (array.indexOf(text) != -1) {
        return array.indexOf(text)
    } else {
        return "El texto no se encunetra dentro del array"
    }
}

console.log(findArrayIndex(array, "Mosquito"));
console.log(findArrayIndex(array, "Tortuga"));
