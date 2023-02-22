console.log("task 5")

let input = document.getElementById("name")
let file = document.getElementById("img")

let button = document.querySelector("button")
let ul = document.querySelector("ul")
button.onclick = function(){

    let url = URL.createObjectURL(file.files[0])

    let personImage = document.createElement("img")
    personImage.src=url
    personImage.style.width = "150px"
    let li = document.createElement("li")
    li.innerHTML = input.value 
    li.appendChild(personImage)
    ul.appendChild(li)
}