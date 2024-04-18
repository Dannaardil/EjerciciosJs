import prompt from "prompt-sync";

let input = prompt();


 let likes = function(){
        let number = input("ingrese el numero de likes: ")
        if (number < 1000) {
            return console.log(number.toString());
        } else if (number < 1000000) {
            return console.log(Math.floor(number / 1000) + 'K');
        } else {
            return console.log(Math.floor(number / 1000000) + 'M');
        }
    }

likes()
