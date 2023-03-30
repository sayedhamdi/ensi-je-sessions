const bodyParser = require("body-parser")
const express = require("express")
const fs = require("fs")
const app = express()
const newsfile = require("./news")

const cors = require("cors")

let database = []
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded())

app.get("/home",(req,res)=>{

    /// execute this code
    const homepage = fs.readFileSync("./home.html");
    res.end(homepage)
})

const signUpController = (req,res)=>{
    database.push({firstname : req.body.first,lastname : req.body.last})
    res.redirect("/list")
}

// thats a controller 
app.post("/form",signUpController)


const ListOfSignUps = (req,res)=>{
    
    let HTML = "<h1>List des inscrits <a href='/home'>ajouter </a></h1><table border='1'><tr><td>first name </td><td>last name</td></tr>"
    for (let i=0;i<database.length;i++){
        HTML+=`<tr>
                <td>${database[i].firstname}</td>
                <td>${database[i].lastname}</td>
              </tr>`
    }
    res.end(HTML)
} 



app.get("/list",ListOfSignUps)


//our first restful api endpoint 
// Method GET /path latest-news 
// JSON Array / Object
app.get("/latest-news",async (req,res)=>{
    res.json(newsfile)
})

app.listen(8000)