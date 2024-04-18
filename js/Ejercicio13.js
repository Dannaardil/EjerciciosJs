import prompt from "prompt-sync"
let input = prompt();

function removerCeros(arreglo){
    let resultado = []
    for (let i of arreglo){
        if (i != 0){
            resultado.push(i)
        }

        
    }
    return(resultado)
}

console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []