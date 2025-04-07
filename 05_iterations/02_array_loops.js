// 'for of' loop

const arr = [4, 7, 1, 3, 9];
for (const yey of arr) {
    console.log(yey);
}

const greetings = "hello";
for (const char of greetings) {
    console.log(char);
}

// Maps
const mp = new Map(); // map is an object
mp.set("name", "Ayush");
mp.set("age", 22);
mp.set("name", "Anshu"); // overwrites the previous value

console.log(mp);
for (const k of mp) {
    console.log(k);
}
for (const [key, value] of mp) {
    console.log(key, value);
}
console.log(mp.keys());

const games = {
    'game1' : 'cricket',
    'game2' : 'football',
    'game3' : 'hockey'
}
// for (const [key, val] of games){
//     console.log(key);
// }
// this will not work because Objects are not iterable

// 'for in' loop

for (const key in games) {
    console.log(`${key}: ${games[key]}`);

}

const lingo = ['js', 'python', 'java', 'c++'];
for (const key in lingo) { // takes key as index
    console.log(`${key}: ${lingo[key]}`);
}

// for in doesn't work for Maps
for (const p in mp) {
    console.log(p); // did nothing
}
// why so? 
// because Maps are iterable and Objects are not iterable
// for in loop is used for objects
// for of loop is used for iterable objects like Arrays, Maps, Sets, Strings

const coding = ['js', 'ruby', 'java', 'python', 'c++'];
// callback function used here
coding.forEach( function ( yeyy ) {
    console.log(yeyy);
});
// using arrow function below
coding.forEach( ( yeyy, index, arr ) => {
    console.log("sfjkn " + index + ' ' + yeyy + ' ' + arr);
});

function printMe(item){
    console.log(item);
}

coding.forEach(printMe); // passing function as a parameter
// iska reference dena h execute nhi karna, () nahi lagana
// forEach doesn't return anything
// forEach doesn't break, continue the loop

// trying for Each on objects
const myCoding = [
    {
        languageName : 'javascript',
        languageFileName : 'js',
    }
    , {
        languageName : 'python',
        languageFileName : 'py',
    }, {
        languageName : 'java',
        languageFileName : 'java',
    }
]
myCoding.forEach( (yeyy) => {
    console.log(yeyy.languageName + " " + yeyy.languageFileName);
    console.log(yeyy);
    
})