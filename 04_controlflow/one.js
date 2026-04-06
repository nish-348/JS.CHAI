//IF

if (condition = true) {
    //code to run if condition is true
}

//ELSE

if (condition = true) {
    //code to run if condition is true
} else {
    //code to run if condition is false
}

////////////////
const userisloggedin = true;

if (userisloggedin) {

}

//<,>,<=,>=,==,(===)= type checking,!=,!==
const t=89;
if(t<100){
    console.log("t is less than 100");
}else{
    console.log("t is greater than or equal to 100");
}

const username = "nishtha";
if(username === "nishtha"){
    console.log("username is nishtha");
}else{
    console.log("username is not nishtha");
}       

//var should not be used as it declares a variable as global scope which works even outside the scope
//can use let const etc..

//shorthand notation
const j=88;
if(j<100) console.log("j is less than 100");//no scope implicitly defined here, so only this line will be executed if condition is true

//njn
const age = 18;
const gender="female";
const login=google;
const login2=facebook;

if(age>=18 && gender==="female"){
    console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote");
}
if(login===google || login2===facebook){//if either of the condition is true then the code will be executed
    console.log("You are logged in");
}