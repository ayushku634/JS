// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// AVOID THESE KIND OF COMPARISONS

// equality check == and comparisons > < >= <= work differently. 
// Comparisons convert null to a number 0
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true (wtf? but here is an issue of conversion in >=)

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0); // all give false values as undefined is unclear

console.log("\n");
console.log("2" == 2)
console.log("2" === 2)