// //ARRay

// const myArr= [1, 2, 3, 4, 5, "nishthaamay"];
// ///indexing hota hai array me
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr[3]);
// console.log(myArr[4]);
// console.log(myArr[5]);

// //array me hum kisi bhi type ke data ko store kar sakte hai
// const myArr2= [1, 2, 3, 4, 5, "nishthaamay", true, null, undefined];
// console.log(myArr2);

// //array me hum duplicate value store kar sakte hai
// const myArr3= [1, 2, 3, 4, 5, "nishthaamay", true, null, undefined, 1, 2, 3];
// console.log(myArr3);

// // how to define array in js
// const myArr4= ["bat", "ball", "stump"];
// console.log(myArr4);
// //2
// const myArr5= new Array("bat", "ball", "stump");
// console.log(myArr5);

//ARRAY METHODS
const myArr6= ["bat", "ball", "stump"];
//push method
// myArr6.push("gloves");
// console.log(myArr6);
// myArr6.pop();//pop ke andar kuch nhi dena hota h jo last value hogi usko remove kar dega
// console.log(myArr6);
// myArr6.unshift("helmet");//unshift me vallue jo bhi ho usko array ke starting me add kar dega
// console.log(myArr6);
// myArr6.shift("helmet");//shift me value jo bhi ho usko array ke starting se remove kar dega


//console.log(myArr6.includes("ball"));//includes method me hum jis value ko check karna chahte hai usko dena hota hai agar value array me 
// hai to true return karega nhi to false return karega
// console.log(myArr6);

// console.log(myArr6.indexOf("ball"));//indexOf method me hum jis value ka index check karna chahte hai usko dena hota hai agar value
// //  array me hai to uska index return karega nhi to -1 return karega    


// const newArr=myArr6.join(":")
// console.log(newArr);//join method me hum jis separator se value ko join karna chahte hai usko dena hota hai agar kuch nhi denge
// //  to default separator comma hoga
// console.log(typeof newArr);//join method se hume string hi milega

//slice,splice


// const myArr7= ["bat", "ball", "stump", "gloves", "helmet"];
// const newArr2=myArr7.slice(1, 4);//slice method me hum starting index aur ending index dena hota hai ending index se ek
//  kam tak value return karega


// console.log(newArr2);
// console.log(myArr7);//slice method se original array me koi change nhi hota hai

//const myArr8= ["bat", "ball", "stump", "gloves", "helmet"];
//myArr8.splice(1, 2, "wicket", "bails");//splice method me hum starting index dena hota hai aur uske baad kitne element ko remove karna hai
// uske baad jitne bhi element ko add karna hai unko dena hota hai splice method se original array me change hota hai
//console.log(myArr8);