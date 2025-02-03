let score = "33"

// sometimes we don't know what is the dataType, eg : data from request or from some external form
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);


let rank = "3abc"
console.log(typeof rank)
let rankInNumber = Number(rank)
console.log(typeof rankInNumber)
console.log(rankInNumber)
// NaN is Not a Number
// it tried to convert but it can't be converted into a number
// if score = undefined tries to get converted, then also NaN

let s = null
let sn = Number(s)
console.log(typeof sn)
console.log(sn)
// in this case, null got converted into 0

let isL1 = 1
let isLn1 = Boolean(isL1)
console.log(isLn1);

let isL2 = ""
let isLn2 = Boolean(isL2)
console.log(isLn2);

let isL3 = "ayush"
let isLn3 = Boolean(isL3)
console.log(isLn3);

