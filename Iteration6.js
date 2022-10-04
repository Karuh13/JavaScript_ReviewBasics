/* Crea una función llamada swap() que reciba un array y dos parametros que sean
 indices del array. La función deberá intercambiar la posición de los valores de
 los indices que hayamos enviado como parametro. Retorna el array resultante. */

 let arr = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

 function swap(arr, index1, index2) {
/*  let first = Math.min(index1, index2)
    let second = Math.max(index1, index2) */
    let saved = arr[index1];
    arr.splice(index1, 1, arr[index2])
    arr.splice(index2, 1, saved)
    
    return arr
 }

 console.log(swap(arr, 1, 0));
 console.log(swap(arr, 0, 3));
 