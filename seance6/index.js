// a callback is a function passed as a param to another function


function calculer(x,y,callback){
    let result = callback(x,y)

    console.log(result)
}

function sum(x,y){
    return x+y
}
function prod(x,y){
    return x*y
}


calculer(4,5,prod)


let nums = [1,2,3]

let double = x => x*2
let doubledNums = nums.map(double)
console.log(doubledNums)

// a promise is a javascript object

let promise = new Promise((reject)=>{

})
