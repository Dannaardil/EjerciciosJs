import prompt from "prompt-sync"
let input = prompt();

function transcribir(string){
    let resultado=""
    for (let i of string){
        if (i== "G"){
            resultado += "C"

        }
        else if (i== "C"){
            resultado += "G"

        }
        else if (i== "T"){
            resultado += "A"

        }
        else if (i== "A"){
            resultado += "U"

        }
    }
    return (resultado)
}

console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"