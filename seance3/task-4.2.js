let input = document.querySelector("input")
let button = document.querySelector("button")


let registred = document.querySelector("#registred")
let vaccinated = document.querySelector("#vaccinated")


let registredList = [
    {
        id:1,
        name : 'hsan',
        vaccinated : true
    },
    {
        id:2,
        name : 'aziz',
        vaccinated : false
    },
    {
        id:3,
        name : 'mohsen',
        vaccinated : true
    },
]

function createPerson(person){
    let li = document.createElement("li")
    let btn = document.createElement("button")
    if(person.vaccinated){
        btn.innerHTML = 'X'
        btn.classList.add("btn-delete")
    
    }else{
        btn.innerHTML = 'V'
        btn.classList.add("btn-vaccinated")
    }
    
    li.innerHTML = "esm : " + person.name
    li.appendChild(btn)
    
    btn.onclick = function(){
        if(person.vaccinated){
            registredList = registredList.filter(p => p.id != person.id )
        }
        person.vaccinated = true
        display()
    } 
    return li
}




function display(){
    vaccinated.innerHTML = ""
    registred.innerHTML = ""
    for(let i =0;i<registredList.length;i++){
        let p = createPerson(registredList[i])
        if(registredList[i].vaccinated){
            vaccinated.appendChild(p)
        }else{
            registred.appendChild(p)
        }
    }
}

button.onclick = function(){
    let p = {
        id: registredList.length + 1,
        name : input.value,
        vaccinated : false
    }
    registredList.push(p)
    display()
}


display()