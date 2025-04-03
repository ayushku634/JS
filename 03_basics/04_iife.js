// IIFE : Immediately Invoked Function Expression
// Global scope k pollution se bachne k liye

(function tea(){
    // Named IIFE
    console.log("DB Connected");
})(); // declare hone k saath saath run ho gya

// iss upar vaale mei semi-colon zaroori h, invoke to ho gya h... parr isey pata nhi h ki 
// actually mei context rokna kaha h

( () => {
    // Anonymous IIFE, or simple IIFE
    console.log("DB Judd gya");
})(); // ye bhi chalega

function chai(){
    console.log("Logged In");
}
chai();

(function hehe(name){
    console.log(`Hatt ja ree ${name}`);
})('Laadle');