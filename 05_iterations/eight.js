//accumulator ka value mpmc jaisa hota h
//first me initial value maangta h fir jo bhi value return hoti h usko accumulator me store kar leta h aur next value
//  ke sath usko add kar leta h
const nums=[1,2,3,4,5,6,7,8,9,10];      
const sum=nums.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);
console.log(sum);

//reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//In this case, the reducer function is (accumulator, currentvalue) => accumulator + currentvalue, which takes the accumulated value and the current value from the array and adds them together. 
//The initial value for the accumulator is set to 0. Therefore, the reduce method will iterate through each number in the nums array, adding it to the accumulator, and ultimately return the sum of all the numbers in the array. The output will be 55.