//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

//IIFE is a function that is executed immediately after it is defined. It is a common JavaScript pattern that
//  is used to create a new scope and avoid polluting the global scope.
//Syntax of IIFE
// (function(){
//     //code here
// })();

//Example of IIFE
(function(){
    console.log("This is an IIFE");
})();

//IIFE can also be written using arrow function syntax
(() => {
    console.log("This is an IIFE using arrow function syntax");
})();

//IIFE can also be used to create a new scope and avoid polluting the global scope
(function(){
    const username = "nishtha";
    console.log(username); //This will print nishtha as username is in the scope of IIFE
})();
//console.log(username); //This will throw error as we are trying to access username outside block of IIFE