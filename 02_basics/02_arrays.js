const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const marvel = structuredClone(marvel_heros);

marvel_heros.push(dc_heros)
console.log(marvel_heros); // complete array got inserted as an element

// marvel.concat(dc_heros) 
const new_heros = marvel.concat(dc_heros) // upar vaala kaam nhi karega kyuki 'concat' ek nayi array return karta hai
console.log(new_heros); // concat pushes elementwise

// this "..." spreads all the elements
const allNew = [...marvel, ...dc_heros]
console.log(allNew)

const a1 = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]
// depth of flattening mentioned
const usable = a1.flat(1)
console.log(usable)
const usable1 = a1.flat(Infinity)
console.log(usable1);

console.log("\n")

console.log(Array.isArray("Ayush"))
// Array created from "Ayush"
console.log(Array.from("Ayush"))
// console.log(Array.from("Ayush", "Anuj")) doesn't work
console.log(Array.from({name : "Ayush"})) // give blank array as not able to understand
// line 29 : specify karna padega ki key se ya values se... kisse banani h array

let s1 = 100, s2 = 200, s3 = "Ayush", s4 = 3, s5 = false;
console.log(Array.of(s1, s2, s3, s4, s5));