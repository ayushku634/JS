const score = 400;
console.log(score);

// Same as string, functions and all bata deta h, in browser console
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const other = 34.33468;
// These are giving strings
console.log(other.toFixed(3));
console.log(other.toPrecision(6));
console.log(typeof other.toFixed(2));

const other1 = 12374.37694
console.log(other1.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// Lots of values like this
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.EPSILON);


// ++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++

// This is an object and can be viewed in browser console in-depth
console.log(Math);
console.log(Math.abs(-17));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
// Things like power, sqrt, min value in array, etc

console.log(Math.random()); // random between 0 and 1
console.log(Math.floor(Math.random()*16)+1); // value between 1 and 16

const min = 10
const max = 29
console.log(Math.floor((Math.random() * (max-min+1) ) + min));