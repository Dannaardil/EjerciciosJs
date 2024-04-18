import prompt from "prompt-sync"
let input = prompt();

let cal_IMC = function(){
    let peso = input("Ingrese su peso: ")
    let altura = input("Ingrese su altura: ")
    let BMI = peso/(altura**2)
    if (BMI<18.5){
        console.log("Bajo de peso")
    }
    else if (BMI>=18.5 && BMI<24.9){
        console.log("Normal")

    }
    else if (BMI>= 25 && BMI<= 29.9){
        console.log("Sobrepeso")
    }
    else if (BMI>30) {
        console.log("Obeso")

    };

    




}
cal_IMC()