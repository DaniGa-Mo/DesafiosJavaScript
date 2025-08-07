/*
EJERCICIO:
* - Crea ejemplos utilizando todos los tipos de     operadores de tu lenguaje:
Aritmeticos, lógisticos, de comparación, asignación, identidad, pertenencia, bits...
* - Utilizando los operaciones con operadores que tú quieras, crea ejemplos que representen todos los tipos de control que existen en tu lenguaje:
Condicionales, iterativos, excepciones...
* - Debes hacer print por consola del resultado de todos los ejemplos.

* - DIFICULTAD EXTRA:
- Crea un programa que imprima por consola todos los números comprendidos entre 10 y 55 (incluidos), pares y que no son ni el 16 ni multiplos de 3.
*/

//OPERADORES DE ASIGNACIÓN

let x = 4;
let y = 2;

//Asignación
let asignacion = (x = y);
console.log(asignacion);

//Asignación de adición
let asignacionAdicion = (x += y); //x = x + y
console.log(asignacionAdicion);

//Asignación de sustracción
let asignacionSustraccion = (x -= y); //x = x - y
console.log(asignacionSustraccion);

//Asignación de multiplicación
let asignacionMultiplicacion = (x *= y); //x = x * y
console.log(asignacionMultiplicacion);

//Asignación de división
let asignacionDivision = (x /= y); //x = x / y
console.log(asignacionDivision);

//Asignación de resto
let asignacionResto = (x %= y); //x = x % y
console.log(asignacionResto);

//Asignación de exponenciación
let asignacionExponenciacion = (x **= y); //x = x ** y
console.log(asignacionExponenciacion);

//OPERADORES DE COMPARACIÓN

function operacionesComparacion(a,b) {
    //Igualdad
    console.log(a == b); //true si son iguales
    console.log(a === b); //true si son iguales y del mismo tipo

    //Desigualdad
    console.log(a != b); //true si son diferentes
    console.log(a !== b); //true si son diferentes o de diferente tipo

    //Mayor que
    console.log(a > b); //true si a es mayor que b

    //Menor que
    console.log(a < b); //true si a es menor que b

    //Mayor o igual que
    console.log(a >= b); //true si a es mayor o igual que b

    //Menor o igual que
    console.log(a <= b); //true si a es menor o igual que b  
    
}
operacionesComparacion(5, 3);

//OPERADORES ARITMÉTICOS (suma, resta, multiplicación, división, resto, incremento, decremento)

function operacionesAritmeticas(a, b) {
    //Ressiduo
    console.log(a % b); //Resto de la división de a entre b

    //Incremento
    console.log(++a); //Incrementa a en 1 y devuelve el nuevo valor

    //Decremento
    console.log(--b); //Decrementa b en 1 y devuelve el nuevo valor

}

operacionesAritmeticas(10, 3);

//OPERADORES LÓGICOS (AND, OR, NOT)

function operacionesLogicas(a, b) {
    //AND
    console.log(a && b); //Devuelve true si ambos son verdaderos

    //OR
    console.log(a || b); //Devuelve true si al menos uno es verdadero

    //NOT
    console.log(!a); //Devuelve true si a es falso, y viceversa

}

operacionesLogicas(true, false);

//OPERADORES CONDICIONAL (ternario)

function operadorCondicional(a, b) {
    //Operador ternario
    let resultado = (a > b) ? "a es mayor que b" : "b es mayor o igual que a";
    console.log(resultado);
}
operadorCondicional(5, 3);

//OPERADORES DE IDENTIDAD (typeof, instanceof)

function operadoresIdentidad(variable) {
    //typeof
    console.log(typeof variable); //Devuelve el tipo de la variable

    //instanceof
    console.log(variable instanceof Array); //Devuelve true si variable es un Array

}
operadoresIdentidad([1, 2, 3]);

//Operadores condicionales (if, else, switch)

function operadoresCondicionales(a) {
    //if, else if, else
    if (a > 0) {
        console.log("a es positivo");
    } else if (a < 0) {
        console.log("a es negativo");
    } else {
        console.log("a es cero");
    }

    //switch
    switch (a) {
        case 1:
            console.log("a es uno");
            break;
        case 2:
            console.log("a es dos");
            break;
        default:
            console.log("a no es ni uno ni dos");
    }
}       
operadoresCondicionales(3);


//Desafio extra

//Crea un programa que imprima por consola todos los números comprendidos entre 10 y 55 
// (incluidos), pares y que no son ni el 16 ni multiplos de 3.

function desafioExtra() {
    for(let i = 10; i <= 55; i++){
        if(i % 2 === 0 && i !== 16 && i % 3 !== 0){
            console.log(i);
        }               
    }
}
desafioExtra();
