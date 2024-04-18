import prompt from "prompt-sync"
let input = prompt();

function multiplicarArreglo(arregloDeNumeros){
    let sum = 1
    for (let i of arregloDeNumeros){
        sum *= i

    }
    return (sum)

}

console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1