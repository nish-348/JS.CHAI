//while
let i=0
while(i<=8) {
    console.log(`i is less than or equal to 8: ${i}`);
    i=i+3;
}

let w=["apple", "banana", "orange", "grape", "kiwi"];
let j=0;
while(j<w.length) {
    console.log(`value is ${w[j]}`);
    j++;
}

//do while
do {    console.log(`i is less than or equal to 8: ${i}`);
    i=i+3;
} while(i<=8);

do {
    console.log(`value is ${w[j]}`);
    j++;
} while(j<w.length);