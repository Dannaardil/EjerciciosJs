import prompt from "prompt-sync"
let input = prompt();
let contra = function(){
    let contraseña = input("Ingrese su contraseña: ");
    let con_1 = "2Fj(jjbFsuj"; 
    let con_2 = "eoZiugBf&g9";
    
    
    if (contraseña === con_1 || contraseña=== con_2){
        console.log("True")
    
    }
    else{
        console.log("False")
    }
    
    }
    
    contra();