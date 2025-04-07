const isUserLoggedIn = true;
const score = 548
if(score > 500) {
    console.log("Welcome back!");
}
else if(score > 400 && isUserLoggedIn) { // || for OR
    console.log("Welcome back, but you need to improve!");
}
else {
    console.log("You need to work harder!");
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}

const month = 2;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break; // agar break nhi kiya to default ko chhod k baaki saare k saare cases match karta h
    case 3:
        console.log("March");
        break;
    default:
        console.log("Invalid month");
        break;
}