//for loop
//for (let index = 0; index < array.length; index++) {
  //  const element = array[index];
    
//}

    
// for(let i = 0; i <=10; i++) {
//     const element = i;
//     if(i === 5){
//         console.log("i is 5");

//     }
//     console.log(element);

    
// }
// for(let i = 0; i <=10; i++) {
// console.log(`outer loop ${i}`);
//     for(let j = 0; j <=10; j++) {
//         console.log(`inner loop value ${j} and inner loop ${i}`);
//         console.log(i +'*'+ j +'=' +i*j); 
//     }
// }
let myarray=["apple", "banana", "orange", "grape", "kiwi"];
for(let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element);
}

//break and continue

//break is used to exit the loop when a certain condition is met
//continue is used to skip the current iteration and move to the next iteration when a certain condition is met

for(let i = 0; i <=10; i++) {
    if(i === 5){
        console.log("i is 5");
        break;
    }
    console.log(i);
}

for(let i = 0; i <=10; i++) {
    if(i === 5){
        console.log("i is 5");
        continue;
    }
    console.log(i);
}