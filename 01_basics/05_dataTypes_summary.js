// 2 types of DataTypes : Primitive, Non-Primitive based on the way in which the data is stored and accessed

// PRIMITIVE (call by value)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const temp = null
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);
// these both might look similar but they are not, this is the speciality of symbol datatype
console.log(id == anotherId);

// BigInt
const bigNumber = 237547364836843356838n // n lagane se vo bigint bann gya
console.log(typeof bigNumber);

// NON-PRIMITIVE (Reference Type)
// Array, Objects, Functions all 3 are Object
const heroes = ["Ironman", "Shaktiman"]
// object
let myObj = {
    name : "Ayush",
    age : 22
}
const myFunction = function(){
    console.log("Hello Ayush!");
}
// object function is the datatype of the function above
console.log("");

// https://262.ecma-international.org/5.1/#sec-11.4.3
console.log(typeof temp); // null is object
console.log(typeof anotherId); // symbol
console.log(typeof heroes); // array is object
console.log(typeof myObj); 
console.log(typeof myFunction); // this is object-function


/*
JavaScript is a dynamically typed language, but TypeScript is a statically typed language. 
Mujhe batana nhi padta ki konsa dataType h
In dynamically typed languages all type checks are performed in a runtime, 
only when your program is executing
*/
