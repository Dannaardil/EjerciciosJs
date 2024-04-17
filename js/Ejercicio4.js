import prompt from "prompt-sync"
let input = prompt();

let imprimirArreglo = function(){
    let contador = 0
    let frase = input("Ingrese el arreglo a separar: ")
      let palabras = frase.split(" ")
      for (let i in palabras){
      
        console.log (palabras[contador])
        contador ++ 
      }
  


}
imprimirArreglo()