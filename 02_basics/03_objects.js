// singleton objects made using constructors only

// Object literals
const jsUser = {} // empty object
const jsUser2 = Object.create(null) // is the constructor method, Singleton
const mySym = Symbol('key1')


const user = { 
    // key is a string, value can be anything
    name: 'Ayush',
    "full name": 'Ayush Kumar',
    mySym: 'Aky', // this is not a symbol but a string
    [mySym]: 'AKY', // this is a symbol
    age: 22,
    isStudent: true,
    location: 'Kanpur',
    email: 'ayush@coinbase.com',
    lastLoginDays: ["Monday", "Tuesday", "Thursday"],
}

console.log(user.age); // 22
console.log(user['age']); // 22, user[age] undefined 

// full name ko . se access nahi kar sakte
console.log(user['full name']); // Ayush Kumar, only way to access
console.log(user[mySym]); // Aky, this is the only way to access the symbol

user.email = "ayush@openai.com" // updated email
// Object.freeze(user) // freeze the object, no more changes allowed
user.email = "ayush@google.com" // this will not work
console.log(user);
// freeze hata rha hu aage ka karne k liye

user.greeting = function() { 
    console.log("Hello My Boii");
} // adding a method to the object

console.log(user.greeting); // this will not work, gives function return back, execute nahi hua h bss reference mila h
console.log(user.greeting()); // Hello My Boii
user.greeting() // dono ki printing same hai

user.Greeting = function() {
    console.log(`Hello JS User, ${this.name}`);
}
user.Greeting() 