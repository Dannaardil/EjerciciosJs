import prompt from "prompt-sync"
let input = prompt();


function numeroDeAes(string){
    let numeroTotal = 0
    for (let i of string){
        if (i == "a"){
            numeroTotal++
           
        }
    }
    return(numeroTotal)
}
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0