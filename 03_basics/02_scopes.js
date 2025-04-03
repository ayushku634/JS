var d = 400
let e = 500

if (true){
    // this is a block scope
    let a = 100
    const b = 200
    var c = 300
    var d = 600 // redeclared
    let e = 700 // redeclared
    console.log(a, b, c, d, e); // 100 200 300 600 700
}
// console.log(a) // ReferenceError: a is not defined
// console.log(b) // ReferenceError: b is not defined
console.log(c) // 300
// let aur const block scope mei kaam karte hain, var function scope mei kaam karta h

console.log(d) // 600
console.log(e) // 500
// var vaapas se declare ho k change ho gya, let nahi hua

// NESTED SCOPE
function one(){
    const user = "ayush"
    function two(){
        const website = "youtube"
        console.log(user); // ayush
    }
    // console.log(website); // ReferenceError: website is not defined
    two()
}
one()

// +++++++++++++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5)) // 6, koi dikkat nhi
function addOne(num){
    return num + 1
}

console.log(addTwo(8)) // ReferenceError: Cannot access 'addTwo' before initialization
// hoisting (baad mei dekhenge)
const addTwo = function(num){ // sometimes we say it expression
    return num + 2
}
addTwo(5) // 7