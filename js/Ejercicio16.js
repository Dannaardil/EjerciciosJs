import prompt from "prompt-sync"
let input = prompt();


function capitalizar(string){
     let resultado = ""
    for (let i in string){
        if (i==0 ){
            resultado+= string[0].toUpperCase()
        }
        else{
            
            resultado+= string[i]
        }
    }
    return (resultado)
}

console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""