const nums=[1,2,3,4,5,6,7,8,9,10];
const newnums=nums.map((num)=>num+10);
console.log(newnums);

//map method creates a new array with the results of calling a provided function on every element in the calling array. 
//In this case, the provided function is (num) => num + 10, which takes each number in the nums array and adds 10 to it. 
//Therefore, the newnums array will contain all the numbers from the original nums array with 10 added to each of them. 
// The output will be [11,12,13,14,15,16,17,18,19,20].

//basically value ko ek ek kark call kiya jaayega acccording to condition jo given hoga waha pe
//chaining bhi kar sakte h map ke sath filter bhi kar sakte h
const newnums2=nums.map((num)=>num+10).filter((num)=>num>15);
console.log(newnums2);

//This will first add 10 to each number in the nums array and then filter out the numbers that are greater than 15. 
//The output will be [16,17,18,19,20] as these are the numbers from the newnums array that are greater than 15.
