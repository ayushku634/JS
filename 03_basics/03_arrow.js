const user = {
    userName: "Ayush",
    price : 999,

    welcomeMsg: function(){
        console.log(`Welcome ${this.userName}`); // ${userName} nahi chalega kyuki ye function ke andar hai
        console.log(this);
    }
}
user.welcomeMsg()
user.userName = "Anshu"
user.welcomeMsg()

console.log(this); // NODE mei ye empty global object hota h, browser mei ye window object hota h
console.log('\n');

function chai(){
    let userName = "Ayush"
    console.log(this); // pat nhi bhot kuch aa rha
    console.log(`Welcome ${this.userName}`); // Welcome undefined, function k andar work nhi karta
    console.log(`Welcome ${userName}`); // works
}
chai()

const tea = function () {
    let userName = "Anshu"
    // console.log(this); same as upar vaala function
    console.log(this.userName); // undefined
}
tea()

const tea2 = () => {
    let userName = "Anshu"
    console.log(this); // ye empty sa aa rha h
    console.log(this.userName); // undefined
}
tea2()

// ++++++++++++++++++++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++++++++++++++++++++++++

// Explicit return
const add = (a, b) => {
    return a + b
}

// Implicit return
const add2 = (a, b) => a + b
const add3 = (a, b) => (a+b) 
const add4 = a => a + 1 // single parameter mei brackets nahi lagte
// Curly bracket use hua to return likhna hi padega, parenthesis use hua to nhi likhna padega

const add5 = (a, b) => {userName: "Ayush"} // undefined
console.log("add5: ", add5(2, 3)); // ye undefined dega kyuki return nahi hua h

const add6 = (a, b) => ({userName: "Ayush"})
console.log(add6(2, 3)); // ye chalega kyuki return hua h