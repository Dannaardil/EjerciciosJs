import prompt from "prompt-sync"
let input = prompt();

function numeroDeCaracteres(string, caracter){
    let caracter1 = caracter.toString();
    let string1 = string.toString(); 
    let numberTimes = 0
   

    for (let i of string1){
        if (i == caracter1){
            numberTimes++

        }
        
    }
    return (numberTimes)
    }
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", e)) // 4