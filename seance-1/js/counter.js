console.log("yekhdem el js")
let counter = 0
let counterHTML = document.getElementById("counter")
function add(){
    counter++
  
    counterHTML.innerHTML  = counter

    // si le compteur est un multiple de 3 alert
   if(counter % 3 == 0) {
    alert(" multiple de 3")
   }
}