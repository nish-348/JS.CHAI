//{} hi scope h ..............iske andar jo rahega wo iska maamla iske baahar ka maamla nahi h
//{} scope ke andar jo bhi variable banega wo usi scope ke andar kaam karega aur uske baahar nahi chalega
//{} scope ke andar jo bhi function banega wo usi scope ke andar kaam karega aur uske baahar nahi chalega

// var a = 1;
// let b = 2;
// const c = 3;
// console.log(a);
// console.log(b);
// console.log(c);

// Curly braces {} => Scope

//Problems

//if ke baahar global scope me a, b, c ko access kar sakte hai
let a= 1;
if(true){
    let d = 10;
    const e = 20;
    var f = 30; //It can be redelcared plus re-initialized
}
console.log(a); //This will print 1 as a is declared in global scope

// console.log(d); //This will throw error as we are trying to access d outside block of if conditional
// console.log(e); //This will also throw error are we are trying to access e outside block of if conditional
// console.log(f); //This will print 30 => And that is a problem, it shouldn't be accessed the block

//Note! => code written in global scope can be accessed in the block scope but the vice-versa is not true

//Note! => Global Scope in console and node js environment (production code) is different

//hii ,i am back
//nested scope => scope ke andar scope

function one(){
    const username="nishtha"
    
        function two(){
            const website="nishtha.com"
        console.log(username);
    }
    //console.log(website);//This will throw error as we are trying to access website outside block of two function

       //two()// if we call two() here then it will print nishtha as username is in the scope of one function and 
       // two function is inside one function

}   
one()


//now with if and else
    if (true){
        const username="nishtha"
        if (username==="nishtha") {
            const website="nishtha.com"
            console.log(username+website);
        }
        //console.log(website); //error as we are trying to access website outside block of if conditional
    }
    //console.log(username); //This will throw error as we are trying to access username outside
    //  block of if conditional



    //+++++++++++++++++++++++++++++intereseting++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    console.log(addone(5)); //This will print 6 as we are calling addone function before its declaration
    function addone(num){
        return num+1;
    }
//but if we call addtwo function before its declaration then it will throw error as we are trying to 
// access addtwo before its declaration
//addtwo(5) //This will throw error as we are trying to access addtwo before its declaration
    const addtwo = function(num){
        return num+2;
    };
    //Note! => function declaration is hoisted but function expression is not hoisted
