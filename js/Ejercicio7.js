import prompt from "prompt-sync"
let input = prompt();

/*
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


contarRango()*/
function contarRango(numInicial, numFinal) {
    let suma = 0;
    for (let i = numInicial; i <= numFinal; i++) {
        suma += 1;
    }
    return suma;
}

console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0