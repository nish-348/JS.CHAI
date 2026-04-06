//falsy
//false0
//-0
//0n
//""
//null
//undefined
//NaN

//truthy
//true
//any non empty string
//any non zero number
//any object or array
//"0"
//'false'
//" "
//[]
//{}
//function(){}

//to check if array is empty or not
const arr = [];
if(arr.length === 0){
    console.log("Array is empty");
}
// for objects
const obj = {};
if(Object.keys(obj).length === 0){
    console.log("Object is empty");
}

//nullish coalescing operator (??) is used to provide a default value when the left-hand side operand is null or undefined
const name = null;
const defaultName = "Guest";
const finalName = name ?? defaultName; //finalName will be "Guest" because name is null
console.log(finalName);

const age = undefined;
const defaultAge = 18;
const finalAge = age ?? defaultAge; //finalAge will be 18 because age is undefined
console.log(finalAge);

//if we use || operator instead of ?? then it will return the right-hand side operand if the left-hand side operand is falsy 
// (which includes null, undefined, 0, "", etc.) which may not be the intended behavior in some cases

//terniary operator
// condition ? expressionIfTrue : expressionIfFalse
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);