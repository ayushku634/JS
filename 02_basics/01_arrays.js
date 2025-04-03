// This is how an array can be declared, Square Brackets, keep in mind, multiple data types allowed
const myArr = [0, 1, 2, 3, 4, 5, true, "Ayush"]
// Arrays in JS are resizable, 0-based indexing
const arr = [0,1,2,3,4,5]

// Copying arrays makes Shallow Copy (same reference), other is Deep Copy (Not same)

const myHeroes = ["Mumma", "Dad", "Rocky"]
const myArr2 = new Array(6,7,8,"Ayush") // no Square brackets
// Arrays also have functions, prototypes and shit like strings

// Array Methods
myArr.push(6); // but this was const
myArr.push('dvbb')
myArr.pop() 

// Add in the starting
myArr.unshift(9)
console.log(myArr);
// removes from the starting
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

const newArr1 = myArr.join(" && ")
console.log(newArr1);


// slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(3,7)
console.log(myn1);
console.log("B ", myArr);

// Deep copy that is without reference
const myArr3 = structuredClone(myArr)

// first one is the starting index but the 2nd one is number of elements and not the end index
// splice removes those elements
const myn2 = myArr.splice(3,3);
console.log(myn2);
console.log("C ", myArr);

// 4 elements removed and 3 inserted in place of them
const myn3 = myArr3.splice(2,4, "Hello", "Ayush", "Ji")
console.log(myn3);
console.log("D ", myArr3);