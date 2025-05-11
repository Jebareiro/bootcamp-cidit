// ejercicios-javascript.

// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    console.log(10 >= 9); // true
}

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    console.log(0 === 0); // true
}

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    console.log(7 > 8 && 7 < 10); // false
}

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    const precioProducto = 1500;
    const descuento = 0.25;
    const dineroDisponible = 1150;
    const precioFinal = precioProducto * (1 - descuento);
    console.log(dineroDisponible >= precioFinal); // false

}

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    let mensaje = "Hola JavaScript";
    console.log(mensaje);
}

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
        let resultado = 2 + 3;
        console.log(resultado); // 5
}

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
        const IS_DISABLED = true;
        console.log(IS_DISABLED); //true
}

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    let capacidad = null;
    console.log(capacidad); // null
}

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    let dinero;
    console.log(dinero); // undefined
}

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    let userName = "Jessi";
    console.log(typeof userName); // string
}

// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    let dogId = "1234";
    console.log(typeof dogId); // "string"
}

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    console.log("Hola Mundo.");
}

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    let edad = 30;
    console.log(edad); // 30
}

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    const version = 2024;
    console.log('La versión de JavaScript es ' + version); // 'La versión de JavaScript es 2024'
}

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};


// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}
// Prueba: verificarParidad(4); Resultado: El número es par



// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
      if (edad < 18) {
        console.log("Menor de edad");
    } else if (edad >= 18 && edad <= 65) {
        console.log("Adulto");
    } else {
        console.log("Adulto mayor");
    }
}
// Prueba: clasificarEdad(20); Resultado: Adulto



// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}
// Prueba: cuentaRegresiva(5); Resultado: 5 4 3 2 1 0



// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    let contador = 0;
    do {
        console.log("Estoy aprendiendo JavaScript");
        contador++;
    } while (contador < 5);
}
// Prueba: repetirMensaje(); Resultado: El mensaje se imprime 5 veces.



// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
// Prueba: imprimirPares(10); Resultado: 0 2 4 6 8 10



// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            break;
        }
        console.log(i);
    }
}
// Prueba: detenerEnSeis(); Resultado: 1 2 3 4 5



// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() { 
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i);
    }
}
// Prueba: saltarCinco(); Resultado: 1 2 3 4 6 7 8 9 10



// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    switch (dia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Número inválido");
    }
}
// Prueba: obtenerDiaSemana(3); Resultado: Miércoles// Tu código aquí



// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    switch (letra.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("Es una vocal");
            break;
        default:
            console.log("No es una vocal");
    }
}
// Prueba: esVocal('a'); Resultado: Es una vocal



// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        console.log("Todos son positivos");
    } else if (a < 0 && b < 0 && c < 0) {
        console.log("Todos son negativos");
    } else {
        console.log("Al menos uno es negativo");
    }
}


// Prueba: evaluarNumeros(1, -2, 3); Resultado: Al menos uno es negativo



// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};

// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
    function despedir() {
    console.log("Adiós");
}
// Prueba: despedir(); Respuesta: Adiós



// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
    function multiplicarPorDos(numero) {
    return numero * 2;
}
// Prueba: multiplicarPorDos(5); Respuesta: 10



// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
    function esMayorDeEdad(edad) {
    return edad > 18;
}
// Prueba: esMayorDeEdad(20); Respuesta: true
// Prueba: esMayorDeEdad(15); Respuesta: false



// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
    function multiplicar(a, b) {
    return a * b;
}
// Prueba: console.log(multiplicar(2, 3)); Respuesta: 6



// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
    function saludarPersonalizado(nombre, apellido) {
    return `Hola, ${nombre} ${apellido}`;
}
// Prueba: saludarPersonalizado("Jessi", "Bareiro"); Respuesta: "Hola, Jessica Bareiro"



// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
    function calcularPotencia(base, exponente) {
    return Math.pow(base, exponente);
}
// Prueba: calcularPotencia(2, 3); Respuesta: 8



// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
function restar(a, b) {
    return a - b;
}
// Prueba: restar(10, 5); Respuesta: 5



// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
    function dividir(a, b) {
    return a / b;
}
// Prueba: dividir(10, 2); Respuesta: 5



// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `funcionMultiplicar`.
    const funcionMultiplicar = function(a, b) {
    return a * b;
};
// Prueba: funcionMultiplicar(3, 4); Respuesta: 12



// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
   const saludar = function(nombre) {
    return `Hola, ${nombre}`;
};
// Prueba: saludar("Ana"); Respuesta: "Hola, Ana"



// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
    const esPar = function(numero) {
    return numero % 2 === 0;
};
// Prueba: esPar(4); Respuesta: true
// Prueba: esPar(5); Respuesta: false



// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
    const multiplicarFlecha = (a, b) => a * b;
// Prueba: multiplicarFlecha(3, 5); Respuesta: 15



// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
   const saludarFlecha = nombre => `Hola, ${nombre}`;
// Prueba: saludarFlecha("Luis"); Respuesta: "Hola, Luis"



// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
const calcularArea = (radio) => {
    return Math.PI * Math.pow(radio, 2);
};

// Prueba:
console.log(calcularArea(3)); // Respuesta: 28.27....




// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
function suma(n) {
    if (n === 1) {
        return 1;
    }
    return n + suma(n - 1);
}
// Prueba: suma(3); Respuesta: 6



// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Prueba: fibonacci(6); Respuesta: 8



// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
// Prueba: factorial(5); Respuesta: 120



// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    return base * potencia(base, exponente - 1);
}
// Prueba: potencia(2, 3); Respuesta: 8




// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    funcionMultiplicar,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};

// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio 
//del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    let cliente = pedido.shift();
    pedido.unshift("bebida");
    pedido.push(cliente);
    return pedido;
}
// Prueba:
let pedido = ['Jessica', 'asado', 'ensalada'];
console.log(procesarPedido(pedido)); 
// Resultado: ['bebida', 'asado', 'ensalada', 'Jessica']



// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0; 
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            suma += numeros[i];
        }
    }
    return suma;
}
// Prueba:
let numeros = [1, 2, 3, 4, 5, 6];
console.log(sumarPares(numeros)); 
// Resultado: 12 



// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras 
//y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i][palabras[i].length - 1] !== 'a') {
            return false;
        }
    }
    return true;
}
// Prueba:
const palabras = ['casa', 'silla', 'mesa'];
console.log(palabrasTerminanConA(palabras)); 
// Resultado: true 



// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros:
// un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después 
//de ese índice en un nuevo array
function buscaPalabras(words, word) {
    const index = words.indexOf(word);
    if (index === -1) {
        return [];
    }
    return words.slice(index + 1);
}
// Prueba:
const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')); 
// Resultado: ['javascript', 'node']



// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas 
//y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === "JavaScript") {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}
// Prueba:
const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
];
const position = findJavaScript(matrix);
console.log(position); 
// Resultado: [0, 2]



// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números 
//(representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos 
//páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    let minIndex = 0;
    let maxIndex = 0;
    for (let i = 1; i < books.length; i++) {
        if (books[i] < books[minIndex]) {
            minIndex = i; // Actualizamos el índice mínimo
        }
        if (books[i] > books[maxIndex]) {
            maxIndex = i; // Actualizamos el índice máximo
        }
    }
    return [minIndex, maxIndex];
}
// Prueba:
const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado);
// Resultado: [1, 6]



// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
