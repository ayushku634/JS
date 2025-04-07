const coding = ['js', 'ruby', 'java', 'python', 'c++'];

const values = coding.forEach( (item) => {
    console.log(item);
    return item;
} )
console.log(values); // undefined
// forEach doesn't return anything

// ++++++++++++++++++++++++++++++ FILTER +++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++ FILTER +++++++++++++++++++++++++++++++

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter( (num) => num > 4 ) // single line callback function
const newNums2 = myNums.filter( (num) => {
    num > 4;
}) // kyuki curly brackets use kiye hain to return nahi hua h, explicit return karna padega
const newNums3 = myNums.filter( (num) => {
    return num > 4;
}) // explicit return
console.log(newNums); // [5, 6, 7, 8, 9, 10]
console.log(newNums2); // []
console.log(newNums3); // [5, 6, 7, 8, 9, 10]

const value = []
myNums.forEach( (num) => {
    if(num < 6) {
        value.push(num);
    }
}) 
console.log(value); // [5, 6, 7, 8, 9, 10]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')
console.log(userBooks);

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "Science"
})
console.log(userBooks);

// ++++++++++++++++++++++++++++++++ MAP +++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++ MAP +++++++++++++++++++++++++++++++

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let nums2 = nums.map( (num) => num * 2)
console.log(nums2);

// chaining
nums2 = nums
        .map( (num) => num * 3)
        .map( (num) => num + 1)
        .filter ( (num) => num % 2 === 0)
console.log(nums2); // [4, 10, 16, 22, 28]


// ++++++++++++++++++++++++++++++++ REDUCE +++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++ REDUCE +++++++++++++++++++++++++++++++

const arr = [1, 2, 3, 4]
const start = 10000;
const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, start
    // accumulator mei starting mei 'start' value ho jaegi... fir poore loop pe process karr k jo bhi operation
  );
console.log(sumWithInitial); // 10010

const total = arr.reduce( function (acc, curr) {
    console.log(`acc: ${acc}, curr: ${curr}`);
    return acc + curr;
}, 5000) // ye 5000 hi start h
console.log(total); // 5000 + 10 = 5010

// reduce using arrow function
const total2 = arr.reduce( (acc, curr) => {
    console.log(`acc: ${acc}, curr: ${curr}`);
    return acc * curr;
}, 15)
console.log(total2); // 15 * 1 * 2 * 3 * 4 = 360

const shoppingCart = [
    { item: 'Shirt', price: 20 },
    { item: 'Pants', price: 30 },
    { item: 'Shoes', price: 50 },
    { item: 'Hat', price: 15 },
];
const totalPrice = shoppingCart.reduce( (acc, curr) => {
    return acc + curr.price;
}, 0)
console.log(totalPrice); // 115