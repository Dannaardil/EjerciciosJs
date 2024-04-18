import prompt from "prompt-sync"
let input = prompt();

function sumarRango(numInicial, numFinal) {
    let suma = 0;
    for (let i = numInicial; i <= numFinal; i++) {
        suma += i;
    }
    return suma;
}


console.log(sumarRango(0, 10));   // Salida: 55
console.log(sumarRango(12, 14));  // Salida: 39
console.log(sumarRango(5, 5));    // Salida: 5