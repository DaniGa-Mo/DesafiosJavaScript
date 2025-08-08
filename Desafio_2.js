// EJERCICIO DESAFIO 2

/*
Crea una funcion que reciba dos parametros de tipo cadena de texto y retorne un número.
- La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
- Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
- Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
- Si el número es múltiplo de 3 y de 5, muestra la concatenación de las dos cadenas de texto.
- La función retorna el número de veces que ha impreso el número en lugar de los textos.
*/

function imprimirNumerosYContar(param1, param2) {
    let contador = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${param1} ${param2}`);
        } else if (i % 3 === 0) {
            console.log(param1);
        } else if (i % 5 === 0) {
            console.log(param2);
        } else {
            console.log(i);
            contador++;
        }
    }

    return console.log(`Números impresos: ${contador}`);
    
}
// Llamada a la función con ejemplos
const resultado = imprimirNumerosYContar("Fizz", "Buzz");
