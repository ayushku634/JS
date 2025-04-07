const v1 = "sdjvknsv" // true
const v2 = "" // false
const v3 = [] // true

if(v3) {
    console.log("v3 is truthy");
}
else {
    console.log("v3 is falsy");
}

// Falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Surprising Truthy values: "0", "false", " ", [], {}, function(){}, -1, 3.14, Infinity, -Infinity

const v4 = []
if(v4.length === 0) {
    console.log("array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null or undefined
let val1;
val1 = 5 ?? 10; // 5
console.log(val1);

let val2;
val2 = undefined ?? 10 ?? null; // 10
console.log(val2);

let val3;
val3 = null ?? 100 ?? 200; // 100
console.log(val3);

// Ternary Operator
// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice > 100 ? console.log("Expensive") : console.log("Cheap");