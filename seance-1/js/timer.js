
let sec = 1

let interval = 1000 * sec 

let time = 0

let clock = document.querySelector("#timer")
// callback 
setInterval(increment,interval)


let On = false


function increment(){
    if(On){
        time ++
        clock.innerHTML = time
    }
}

function start(){
    On= true
}

function stop(){
    On = false
}



// function reset

// function DoubleSpeed