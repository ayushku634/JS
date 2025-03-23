const name = "Ayush"
const repoCount = 22

console.log(name + repoCount + " Value");

// String interpolation
console.log(`Hello! My name is ${name} and my repo count is ${repoCount}`)

const heh = "hehe"
console.log(heh[0]);
console.log(heh.toUpperCase()); // original value change nahi hui h


// if you do these 2 steps in browser console, index to character mapping bann jaegi
const game = new String("Ayush-KY")
// dekhega to saari chize like, functions that can be used, attributes, sab kuch bata dega
console.log(game.__proto__); // isse yaha pe bhi as object dekh skte h, dikhega empty parr hai nhi empty

console.log(game.length);
console.log(game.toUpperCase()); // original value nhi change hui
console.log(game.indexOf('s'))

const newString = game.substring(2, 4) // 2 se 3 tak
console.log(newString);
// if negative value on 1st
const ns = game.substring(-100, 6); // 0 to 5
console.log(ns);
const ns1 = game.substring(7, -3); // 0 to 7
console.log(ns1);
const ns2 = game.substring(-3, -7); // or (-7, -3) didn't get any output
console.log(ns2);

let anotherString = game.slice(0, 4)
console.log(anotherString);
anotherString = game.slice(-7, -1) // se counting karr rha last bit is -1
// isme bss 2nd last tak hoga, if(-7, 0) then no print. Don't know why
console.log(anotherString);

const string1 = "     heroic     -   "
console.log(string1);
console.log(string1.trim());

const url = "https://ayush.com/kumar%20yadav"
console.log(url.replace('%20','-'));
console.log(url);
console.log(url.includes('kum'));

const name1 = "Ayush_Kumar_Yadav"
const arr = name1.split('_', )
console.log(arr);
const arr2 = name1.split('_', 2) // 2 here is limit of elements in array
console.log(arr2);
