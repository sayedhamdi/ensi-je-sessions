/*
// before es6

var y = 8
// ES6 
let x = 5;

// maa les objects
const pi  = 3.14

x= 6

//pi=3.14159
console.log(" y is : ",y)
console.log('x = ',x)
console.log(pi )

*/

//
let soir = true
let aziz = 'hello'

let message = document.querySelector("h1")
function change(){
    if(soir == true){

        //object // HTMLNODE
        message.innerHTML = "Bonjour !";
        message.style.color = "orange"
        document.body.style.background = "yellow"
        soir = false
    }else{
        message.innerHTML = "Bonsoir !"
        document.body.style.background = "white"
        soir = true
    }
}



let classes = [ "FR", "EN","Math" , "Science","Physique","JS","Russian" ]


let listeHTML = document.querySelector("#classes")

console.log(listeHTML)

for (let i=0;i<classes.length;i++){
    listeHTML.innerHTML += '<li>' + classes[i] + '</li>'  
    //console.log(classes[i]);
}

let i = 0

while( i < classes.length){
    listeHTML.innerHTML += '<li>' + classes[i] + '</li>'  
    i++
}



