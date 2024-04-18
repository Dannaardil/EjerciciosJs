import prompt from "prompt-sync"
let input = prompt();

function capitalizar(string){
    let resultado = ""
   for (let i in string){
       if (i==0 ){
           resultado+= string[0].toUpperCase()
          
       }
       else if(string[i]== " "){
        i++
        
        resultado+= " " +string[i].toUpperCase()
      
         
      
    

       }
       else{
           
           resultado+= string[i]
       }
   }
   return (resultado)
}
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""


