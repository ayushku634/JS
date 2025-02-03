// Stack (primitive), Heap (non-primitive)

let myYTName = "ayushkumaryadav"
// copy given
let anotherName = myYTName
anotherName = "chaiaurcode"

console.log(myYTName);
console.log(anotherName);

let user1 = {
    email : "useriit22@gmail.com",
    upi : "user@ybl"
}
let user2 = user1;
// now here these names user1 and user2 are stored in stack but the data in it is stored in heap
// both of them point to the same memory

user2.email = "ayush@gmail.com"

console.log(user1.email);
console.log(user2.email);



