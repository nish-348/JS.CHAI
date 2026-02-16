//objects can be declared using two ways
//lireal syntax and constructor syntax
//constructor se singleton banega litral se multiple object banega

const mysym = Symbol("key1") // yeh ek unique identifier create kar dega...iske andar jo bhi value hoga usko ignore kar dega...har baar jab bhi isko call karenge toh ek unique identifier return karega
//object literal syntax

const person = {
    name: "John",
    age: 30,
    city: "New York",
    [mysym]: "mykey1",// symbol ko use karne ke liye square brackert use karenge
}
console.log(person[mysym]) // yeh mysymbol ko print kar dega...har baar jab bhi isko call karenge toh ek unique identifier return karega...iske andar jo bhi value hoga usko ignore kar dega
console.log(person) // yeh person object ko print kar dega

console.log(person.name) // yeh person object ke name property ko print kar dega

console.log(person.age) // yeh person object ke age property ko print kar dega

console.log(person.city) // yeh person object ke city property ko print kar dega
//dot lagake ek syntax h lekin agar property name me space h toh usko access karne ke liye square bracket lagana padta h
const person2 = {
    "first name": "John",
    "last name": "Doe",
    age: 30,
    city: "New York"
}

console.log(person2["first name"]) // yeh person2 object ke first name property ko print kar dega

console.log(person2["last name"]) // yeh person2 object ke last name property ko print kar dega

person.name= "Jane" // yeh person object ke name property ko change kar dega
Object.freeze(person) // yeh person object ko freeze kar dega...freeze karne ke baad usme koi bhi change nahi kar sakte...
// freeze karne ke baad usme koi bhi property add nahi kar sakte...freeze karne ke baad usme koi bhi property delete nahi kar sakte
person.name= "Jack" // yeh person object ke name property ko change karne ki koshish karega lekin freeze karne ke baad usme koi bh
// i change nahi kar sakte...toh yeh change nahi hoga
console.log(person.name) // yeh person object ke name property ko print kar dega...freeze karne ke baad usme koi bhi change nahi kar 
// sakte...toh yeh Jane hi print hoga 
 //
 //greeting function
function greeting(){
    console.log("Hello, welcome to JavaScript!")
}
greeting() // yeh greeting function ko call kar dega...toh yeh "Hello, welcome to JavaScript!" print kar dega

