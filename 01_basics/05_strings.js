const name = "Ayush"
const repoCount = 22

// console.log(name + repoCount + " Value");

// String interpolation
console.log(`Hello! My name is ${name} and my repo count is ${repoCount}`)

// if you do these 2 steps in browser console, index to character mapping bann jaegi
const game = new String("Ayush-KY")
// dekhega to saari chize like, functions that can be used, attributes, sab kuch bata dega
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.indexOf('s'))

const newString = game.substring(2, 4)
console.log(newString);

let anotherString = game.slice(0, 4)
console.log(anotherString);
anotherString = game.slice(-7, 4)
console.log(anotherString);

const string1 = "     heroic  -   "
console.log(string1);
console.log(string1.trim());

const url = "https://ayush.com/kumar%20yadav"
console.log(url.replace('%20','-'));
console.log(url);
console.log(url.includes('kum'));

const name1 = "Ayush_Kumar_Yadav"
const arr = name1.split('_')
console.log(arr);
