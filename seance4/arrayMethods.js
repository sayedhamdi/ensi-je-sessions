const persons = [
    { name : "MONCEF" , age: 13} ,
    { name : "BAHIJA" , age: 23} ,
    { name : "ALA" , age: 18} ,
    
];


function MineurMajeur(){

    for(let i=0;i<persons.length;i++){
        //console.log(persons[i])
        if(persons[i].age>= 18){
            persons[i].status = "majeur"
        }else{
            persons[i].status = "mineur"
        }
    }   
    console.log("done ")
}



function MineurMajeurFunction(persons){
    let newPersons = []
    for(let i=0;i<persons.length;i++){
        //console.log(persons[i])
        if(persons[i].age>= 18){
            newPersons.push({name:persons[i].name,age:persons[i].age,status:'majeur'})
        }else{
            newPersons.push({name:persons[i].name,age:persons[i].age,status:'mineur'})
        }
    }   
    return newPersons
}

/*
console.log("old persons" ,persons)
console.log("new persons",newPersons)
*/
let newPersons = MineurMajeurFunction(persons)

let returnedArrayFromMap = persons.map(function(p){
    if(p.age>=18){
        return {
            name:p.name,
            age:p.age,
            status : "majeur"
        }
    }
    return {
        name:p.name,
        age:p.age,
        status : "mineur"
    }
})


//console.log(returnedArrayFromMap)


// ECMASCRIPT 6 

let t = [1,2,3]


//array destructuring 

let firstElement = t[0]
let secondElement = t[1]
let thridElement = t[2]

console.log(firstElement,secondElement,thridElement)

//let [one,two] = t  // [ 1,  2, 3 ]
                   // [one, two ]
//console.log(one,two)
//console.log(t)

//spread operator

// newArray = [1,2,3,4]
let newArray  =  Array.from(t);

let newArray1 = [...t]

newArray.push(4)

newArray1.push('new value ')
console.log(newArray1)
console.log(newArray,t)

//object destructuring
let user = {
    first : 'Khalil',
    last: 'ben Ali',
    age: 28

}

//let {first,last} = user

//let fullname = `${first} ${last}`
//console.log(fullname)

let userPreferences = {
    darkMode : true,
    language : 'FR',
    currency : 'EUR',
}

let userObjectWithDetails = {
    ...user,
    ...userPreferences
}
console.log(userObjectWithDetails)


let obj1 = {
    one : 1,
    two : 2,
    three: 3
}

let obj2  = {
    one : 6,
    four : 4
}


let objResult = {
    two : 6,
    ...obj1
    
}

console.log(objResult)


let {age, ...nameInfos } = user


console.log(age,nameInfos)



let [first,...others] = [1,2,3,4,5]
console.log(first,others)



//arrow functions 

function sayHello(){
    console.log("hello")
} 
function add(x,y){
    return x+y
}
//new Way : 
//procedure 
const hello = (name) =>  {
    return `hello ${name}`
}


let msg = hello("mohsen")
console.log(msg)
//function
const newAdd = (x,y)=>{return x+y};

console.log(newAdd(5,6))




// correction task 1 // 

const persons1 = [
    { name : "MONCEF" , age: 13} ,
    { name : "BAHIJA" , age: 23} ,
    { name : "ALA" , age: 18} ,
    
];



let newPersons1 = persons1.map((p)=> ({...p,status : p.age >= 18 ? 'majeur' : 'mineur'}))


const str1 = 'ahmed&ferah-moez&saadi-fadhel&gadihi';

let FormatToArray = (str) =>{
    let users = str1.split('-').map(user=>{
        let [first,last] = user.split('&')
        return  {first ,last }
    })
    return users
}
console.log(FormatToArray(str1))




/// task 3 


const users = [
    { name : "sarah" , comment : "j'aime ce poste <3" },
    { name : "monya" , comment : "le poste est null :( " },
    { name : "carlos" , comment : "salut l'algérie" }
]


const MoodDetect = (users)=>{
    let arrayWithMood = users.map(({name,comment})=>{
        let heureux = comment.includes("<3")
        let triste = comment.includes(":(")
        let etat = heureux ? 'heureux' :  triste ? 'triste' : 'neutre'
        return {
            name,
            etat
        }
    })
    return arrayWithMood
}


console.log(MoodDetect(users))


//task 4 


const etudiants = [
    { name:'kamel',note : 'bonjour'},
    { name : "sarah" , note : undefined },
    { name : "monya" , note : 7 },
    { name : "carlos" , note : 13 },
    { name : "fadhel" , note : 18 },
    ]


const FailedStudent = (liste)=>{
    // we filtred the students 
    let filtredStudents = liste.filter(student=> !isNaN(student.note) )
    // tri des etudiants par note
    let sortedStudents = filtredStudents.sort((e1,e2) => e2.note - e1.note)

    let callBack = (acc, etudiant) => acc + etudiant.note
    let moyenneDeClasse = filtredStudents.reduce(callBack,0) / filtredStudents.length
    console.log(moyenneDeClasse)
    let listeFinal = sortedStudents.map(etudiant=>{
        return {
            ...etudiant,
            mention : (etudiant.note>moyenneDeClasse) ? 'bien' : 'passable'
        }
    })
    return listeFinal
}

console.log("final liste ", FailedStudent(etudiants))