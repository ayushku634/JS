function sayMyName() {
  console.log('A');
  console.log('K');
  console.log('Y');
}

sayMyName()

function add(n1, n2){
    console.log(n1 + n2);
    // return n1 + n2
}
add()
add(2, 3)
add(5, "4") // 54
add(5, "c") // 5c
// function definition mei Parameters aur Calling mei Arguments

const result = add(2, 3)
console.log("Result: ", result); // undefined

function loginUserMessage(userName){
    return `Hello ${userName}, welcome to the website`
}
const message = loginUserMessage("Ayush")
console.log(message);
console.log(loginUserMessage()); 

function logoutMessage(userName){
    // "",undefined,null,0,NaN are all treated as false
    if(!userName){
        console.log("Please enter a valid name");
        return
    }
    return `Thanks ${userName}!`
}
// default value used if no value given
function func(name = "Guest"){
    console.log(name);
}

// Jaise shopping Cart mei kitne parameteres aaenge vo pata nahi hota h, to uske liye hum rest operator use karte hain
// rest aur spread dono hi '...' se start hote hain, par rest mei ... ke baad koi aur parameter nahi aa sakta h
// like function func(...args, name) { } ye nahi chalega
// par function func(name, ...args) { } ye chalega
function cartPrice(...prices){
    console.log(prices);
    let total = 0
    for(let i = 0; i < prices.length; i++){
        total += prices[i]
    }
    return total
}

console.log(cartPrice(100, 200, 300));

const user = {
    userName: "Ayush",
    price : 999,
}
function userInfo(obj){
    console.log(`Username is ${obj.userName} and price is ${obj.price}`);
}
userInfo(user)
userInfo({
    userName: "Anshu", price: 1999
}) // ye bhi chalega

const myarr = [1, 2, 3, 4, 5]
function secondVal(arr){
    return arr[1]
}
console.log(secondVal(myarr)); // 2
console.log(secondVal([1, 2, 3, 4, 5])); // 2