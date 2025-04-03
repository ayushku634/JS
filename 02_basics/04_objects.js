const tinderUser = new Object() // singleton empty object
tinderUser.name = "Ayush"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false
tinderUser.age = 22

console.log(tinderUser);

const regularUser = {
    name: "Anshu",
    fullname: {
        userfullname: {
            firstName: "Anshu",
            lastName: "Kumar",
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.halfname?.lastName); // ? used to check if the object is null or undefined -> not throw an error and return undefined

const obj1 = {1: 'a', 2: 'b', 3: 'c'}
const obj2 = {4: 'c', 5: 'd'}

const obj3 = {obj1, obj2} // nested object, obj1 and obj2 are keys of obj3
console.log(obj3);

const obj4 = Object.assign(obj1, obj2) // shallow copy of obj1 and obj2
console.log(obj4); // obj1 and obj2 are merged into obj4
const obj5 = Object.assign({}, obj1, obj2)
console.log(obj5);

// dekho ye return to karr rha h ek naya object, but 1st case mei obj1 mei bhi changes ho gaye h aur 2nd mei {} mei
// so 1st case mei shallow copy ho rha h aur 2nd mei deep copy ho rha h
// shallow copy mei agar koi object ke andar object hai to wo copy nahi hota h, sirf reference copy hota h
// deep copy mei pura object copy hota h, agar object ke andar object hai to wo bhi copy hota h 

// isme 1st is target and baaki sab are source

const obj6 = {...obj1, ...obj2} // spread operator, shallow copy
console.log(obj6);

console.log(Object.keys(tinderUser)); // keys in array
console.log(Object.values(tinderUser)); // values in array
console.log(Object.entries(tinderUser)); // key value pair in array
console.log(Object.values(tinderUser).length); // length of object

console.log(tinderUser.hasOwnProperty('name')); // true
console.log(tinderUser.hasOwnProperty('email')); // false

// Browser mei object ke prototype mei bahut saari properties hoti h, jaise console, alert, prompt, etc.


// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// De-structuring
const course = {
    courseName: 'JS in Hindi',
    price: 999,
    courseInstructor: 'Hitesh'
}

const {courseInstructor} = course // destructuring
const {courseName : name} = course
console.log(courseInstructor); // Hitesh
console.log(name); // JS in Hindi

// APIs
