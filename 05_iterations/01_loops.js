// for loop
for (let index = 0; index < 5; index++) {
    const element = index;
    console.log(element);
    
}
// break and continue 

// while loop
let i = 0;
while (i < 10) {
    i += 2;
    if (i === 6) {
        continue; // skip the rest of the loop
    }
    console.log(i);
}

// do while loop
let score = 0;
do {
    score++;
    console.log(`Score: ${score}`);
}
while (score < 5);
