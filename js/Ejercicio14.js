import prompt from "prompt-sync"
let input = prompt();

function sumarArreglo(arreglo, posicionInicial, posicionFinal){
    let suma = [];
    let suma1 = 0
    if (posicionFinal == 0 && posicionInicial == 0 )
    return 0 
    for (let i = arreglo[posicionInicial]; i <= arreglo[posicionFinal]; i++) {
        suma.push(i);
      
    }
    for (let s of suma){

        suma1 += s
    }
    return suma1;

}
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0