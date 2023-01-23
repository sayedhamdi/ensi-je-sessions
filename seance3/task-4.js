let input = document.querySelector("input")
let button = document.querySelector("button")


let registred = document.querySelector("#registred")
let vaccinated = document.querySelector("#vaccinated")


function createPersonElement(name){
    let li = document.createElement("li")
    let btn = document.createElement("button")
    btn.innerHTML = 'V'
    btn.classList.add("btn-vaccinated")
    
    li.innerHTML = "esm : " + name
    li.appendChild(btn)
    btn.onclick = ()=>{
        vaccinated.appendChild(li)
        btn.classList.remove("btn-vaccinated")
        btn.classList.add("btn-delete")
        btn.innerHTML="X"
        btn.onclick = function(){
            li.remove()
        }
    }
    return li
}

button.onclick = function(){
    let person = createPersonElement(input.value)
    registred.appendChild(person)
}
