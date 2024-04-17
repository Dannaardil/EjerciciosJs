import prompt from "prompt-sync"
let input = prompt();

let contarRango = function(){
    let numero = input("ingrese el primer numero: ")
    let numero2 = input("ingrese el segundo numero: ")
   for (let i in numero){
    let numero_s = 0
    if(numero == numero2){
        console.log("0")
    }
    else if (numero != numero2){
        numero_s + (numero2-numero)
        console.log(numero_s)

    }
 }
}


contarRango()