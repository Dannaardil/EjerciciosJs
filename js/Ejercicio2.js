import prompt from "prompt-sync"
let input = prompt();

let cal_impuestos = function(){
    let edad = input("ingrese su edad: ")
    let ingresos = input( "ingrese sus ingresos: ")

    if (edad>= 18 && ingresos>= 1000){
       let  impuestos = (ingresos/100)*40;
       console.log("impuestos a pagar: " + impuestos)
    }
    else {
        console.log ("Usted no aplica para pagar impuestos ")
    }


}
cal_impuestos()