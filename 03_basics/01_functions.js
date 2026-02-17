function name(){
    console.log("Hello World");
    console.log("Welcome to JavaScript");
}
name(); // calling the function

function add(a, b){
    console.log(a + b);
}
add(5, 10); // calling the function with arguments
const result=add(5, 10); // this will print 15 but result will be undefined because add function does not return anything
console.log(result); // undefined becauuse add function does not return anything

function add(a, b){
    return a + b; // returning the sum of a and b
}
const result2=add(5, 10); // this will print 15 because add function returns the sum of a and b
console.log("result:", result2); // 15

function login( username){
    if(username===undefined){// if(!username) can also be used to check if username is undefined or empty
        console.log("Please provide a username");
        return; // this will exit the function if username is undefined
    }

   return `${username} has logged in`;
}
   console.log(login("John"));
   //console.log(login())//if username is empty or undefined it will print "Please provide a username"


   function cartvalue(num1){
    return num1
   }
    console.log(cartvalue(5)); 
    // if we have many values we will use rest opertor ... same as spread operator but it is used in function parameters to collect
    //  all the remaining arguments into an array
  
  
  
    function cartvalue(...num1){
    return num1
     // this will return the sum of all the numbers in the array
   }
   console.log(cartvalue(5, 10, 15)); // this will return [5, 10, 15] because rest operator collects all the arguments into an array

    function cartvalue(val1,val2,...num1){
    return num1
     // this will take 1 and 2 values of tyhe cart and then return the rest of the values in the array
   }
   console.log(cartvalue(5, 10, 15,7,8)); // this will return [15, 7, 8] because rest operator collects all the arguments into an array
   //  except the first two values which are assigned to val1 and val2

//bas value pass kar rahe hai object and array ko function me
   const object ={
    name:"Gintoki",
    show:"Gintama",
    age:29

}


function handleobject(getobject){
    console.log(`The name of mc is ${getobject.name}  in the show named  ${getobject.show} , whose age is ${getobject.age} years old`);
}

handleobject(object);





const arry=[10,20,"Kagura"];

function acesssecondvalue(getarray){
    console.log(`The second index of arry is ${getarray[2]}`)
}

acesssecondvalue(arry);