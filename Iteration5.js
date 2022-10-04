/* Crea una función llamada rollDice() que reciba como parametro el numero
 de caras que queramos que tenga el dado que deberá simular el codigo dentro
 de la función. Como hemos dicho, que la función use el parametro para simular
 una tirada de dado y retornar el resultado. */

function rollDice(sides) {
    return Math.floor((Math.random() * sides) + 1)
}

console.log(rollDice(6));
console.log(rollDice(20));


/* Esto lo he hecho para comprobar que el código de arriba es fiable y 
que produce unos resultados "verdaderamente" aleatorios */
function fairnessChecker(nSides, nTries) {
    let stats = {}
    for (let i = 0; i < nTries; i++) {
        roll = "r" + rollDice(nSides)
        if (!stats.hasOwnProperty(roll)) {
            stats[roll] = 1
        } else {
            stats[roll]++
        }
    }

    return stats
}

console.log(fairnessChecker(6, 6000))