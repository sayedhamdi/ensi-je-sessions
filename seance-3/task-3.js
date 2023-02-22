
/*window.onload = function(){
//when the full document loads 

// execute this script 
}


document.addEventListener("DOMContentLoaded",function(){
    //when the full document loads 

// execute this script 
 
})*/


let input = document.querySelector("input")
let button = document.querySelector("button")
let personDisplay = document.querySelector("#person-display")
let ul = document.querySelector("ul")
let errorMessage = document.getElementById("error-message")
errorMessage.style.display="none"
console.log(errorMessage)
input.onkeyup = function(){
    personDisplay.innerHTML=input.value
}

button.onclick = addPerson

function addPerson(){
    // khoudh el valeur mtaa el input
    // asnaa li 

    // ajouti fel li el valeur mtaa el input
    // ajouti el li fi west el liste
    
    let person = input.value

    if(person ==""){
        input.classList.add("input-error")
        errorMessage.style.display="block"

        return
     
    }else{
        input.classList.remove("input-error")
        errorMessage.classList.remove("afficher")
        errorMessage.style.display="none"
    }
    let li = document.createElement("li")
    li.innerText = person
    ul.appendChild(li)
}

input.onkeydown = function(e){
    console.log("keydown : " +e.keyCode)
}

input.onkeypress = function(e){
    console.log("keypress : " +e.keyCode)
}




