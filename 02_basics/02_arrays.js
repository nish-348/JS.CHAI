// const sabji=["aloo","gobhi","bhindi","matar"];
// const roti=["roti","paratha","naan"];
// // sabji.push(roti);
// // console.log(sabji);// output: [ 'aloo', 'gobhi', 'bhindi', 'matar', [ 'roti', 'paratha', 'naan' ] ]
// // //yaha pe humne sabji array me roti array ko push kiya hai to roti array ek element ke roop me sabji array me add ho gaya hai

// // console.log(sabji[4]);// output: [ 'roti', 'paratha', 'naan' ]
// // //yaha pe humne sabji array ke 4th index pe roti array ko access kiya hai to hume roti array hi milega

// // console.log(sabji[4][0]);// output: roti
// // //yaha pe humne sabji array ke 4th index pe roti array ko access kiya hai aur uske baad roti array ke 0th index pe jo value hai usko access kiya hai to hume roti milega

// // console.log(sabji[4][1]);// output: paratha
// // //yaha pe humne sabji array ke 4th index pe roti array ko access kiya hai aur uske baad roti array ke 1st index pe jo value hai usko access kiya hai to hume paratha milega

// //can use concat as well
// const newsabji = sabji.concat(roti);
// console.log(newsabji);// output: [ 'aloo', 'gobhi', 'bhindi', 'matar','roti', 'paratha', 'naan']
// //concat me new array me store hota hai aur original array me koi change nhi hota hai

// //spread operator..to spread each ellement of array
// const hello= [...sabji,...roti];
// console.log(hello);// output: [ 'aloo', 'gobhi', 'bhindi', 'matar','roti', 'paratha', 'naan']
// //spread operator me bhi new array me store hota hai aur original array me koi change nhi hota hai  

// //we can use flat as well to flatten the array
// const Arr= [1, 2, [3, 4], [5, 6]];
// const newFlatArr= Arr.flat(Infinity);//flat method me hum jis level tak array ko flatten karna chahte hai usko dena hota hai agar hum Infinity denge to wo array ke andar ke nested array ko bhi flatten kar dega
// console.log(newFlatArr);// output: [1, 2, 3, 4, 5, 6]
//flat method me hum jis array ko flatten karna chahte hai usko dena hota hai aur wo array ke andar ke nested array ko flatten kar dega 




console.log(Array.isArray("nishtha")); // output: false
// to chec if its array or not we can use Array.isArray() method
console.log(Array.from("nishtha")); // output: [ 'n', 'i', 's', 'h', 't', 'a' ]


let s1=56
let s4=78
let s2=34
let s3=90

console.log(Array.of(s1,s2,s3,s4)); // output: [ 56, 34, 90, 78 ]
// we can also store variables in array and when we print the array it will print the value of the variable