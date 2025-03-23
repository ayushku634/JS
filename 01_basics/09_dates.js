// Starts from January 1, 1970 and calculated in milliseconds

let myDate = new Date()
// Date is an object
console.log(myDate);
console.log(myDate.toString());
// Sunday is 0
console.log(myDate.getDay());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(typeof myDate);
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// Months from 0 to 11
let myCreated = new Date(2003, 0, 30)
console.log(myCreated.toDateString());

let myCreated1 = new Date(2003, 0, 30, 7, 10)
console.log(myCreated1.toLocaleString());

// Jan is 1 in this format
let myCreated2 = new Date("2003-01-30") // YYYY-MM-DD
console.log(myCreated2.toLocaleString());

let myCreated3 = new Date("01-30-2003") // MM-DD-YYYY
console.log(myCreated3.toLocaleString());

console.log('\n');

let myTimeStamp = Date.now()
// Time from Jan 1 1970 in milliseconds
console.log(myTimeStamp);
console.log(myCreated3.getTime());
// Now we can compare which one is early

// Time in Seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// Month 0 indexed
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// I couldn't understand this 
// I couldn't understand this 
// I couldn't understand this 
newDate.toLocaleString('default', {
    weekday : "long"
})