import prompt from "prompt-sync"
let input = prompt();

let fizzbuzz = function(){
    let number = input("ingrese el numero: ")
    if (number % 3 == 0 && number % 5 == 0){
        console.log("fizzbuzz")
    }
    else if (number%3 == 0){
        console.log("fizz")

    }
    else if (number%5 == 0){
        console.log("buzz")

    }
    else {
        return(console.log(number))
       
    }
}
fizzbuzz()