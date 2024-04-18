import prompt from "prompt-sync"
let input = prompt();

function sumarArreglo(arregloDeNumeros){
    let sum = 0
    for (let i of arregloDeNumeros){
        sum += i

    }
    return (sum)

}

console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0