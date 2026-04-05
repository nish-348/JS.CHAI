//this keyword basically current context ko refer karta hai
//Arrow function me this keyword parent scope ko refer karta hai

const user={
    name:"nishtha",
    age: 22,
    
    welcomemessage: function(){
        console.log(` ${this.name}, welcome`); //this will print nishtha as this
        //  keyword is referring to the current context which is user object
    }//iss scope ke andar ka maamla ko this use karke reffer kar sakte h

}
// user.welcomemessage();
// user.name="amay"
// user.welcomemessage(); //this will print amay, welcome as this keyword is referring to the current context which is user object and
//  we have updated the name property of user object to amay
console.log(this); // output empty hoga 



//arrow function
const welcomemessage = () => { 
    console.log(this); //this will print empty object as this keyword in arrow function is referring to the parent scope which is global scope and in global scope this keyword is empty object
}
//arrow function ka syntax ye h ki function keyword nahi hota aur isme this keyword parent scope ko refer karta hai
//() => {} is the syntax of arrow function
//const addTwo = (a,b) => {
  //  return a+b;
//}
//console.log(addTwo(2,3));    //This will print 5 as we are passing 2 and 3 as arguments to the addTwo function and it is returning the 
// sum of a and b which is 5
//implicit return => jab function ke andar sirf ek line ka code hota hai to usme return keyword nahi lagana padta hai
const addTwo = (a,b) => (a+b); //This will also return 5 as we are passing 2 and 3 as arguments to the addTwo function
//  and it is returning the

console.log(addTwo(2,3))

//IF {}YE USE KAr RAHE TTHEN RETURN USE KARENGE
//ELSE () YE USE KAr RAHE HAIN TOH RETURN USE NAHI KARENGE