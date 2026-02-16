// // ways to define object
//  //const tinder=newobject()
// const tinder={}

// tinder.id="456"
// tinder.name="nishtha"

// console.log(tinder)

// const user={
//     id:"123",
//     name:"nishtha",
//         fullname:{
//             first:"nishtha",
//             last:"kumari"
//                 }// kitna bhi nested object bana sakte hai 1 ke andar jitna man

//             }  

//             console.log(user.fullname.first ) //jo bhi print karna h dot lagake karlo


//const object1={1:"one",2:"two",3:"three"}
//const object2={3:"one",4:"two",5:"three"} 

//const object3= {object1,object2} 
//spread operator se dono object ko merge kar diya
//console.log(object3)
//const object3=Object.assign({},object1,object2)
//object.assign se bhi dono object ko merge kar diya
//console.log(object3)

//best
//const object3={...object1,...object2}
//console.log(object3)


//koi bhi array ke andar bohot saara keys hoga jab toh usko print aise karenne
//console.log(Object.keys(object3)) //object ke andar jitne bhi keys hoga unko print karne ke liye use karenge    
//same value ke liye bhi use karenge
//console.log(Object.values(object3)) //object ke andar jitne bhi values hoga unko print karne ke liye use karenge


//koi propery dhundhne ke liye
//console.log(object3.hasOwnProperty(1)) //object ke andar 1 key hai ya nahi ye check karne ke liye use karenge
//booolean value return karega true ya false





const course={
    name:"javascript",  
    price:999,
    instructor:"nishtha",
}


//destucture
//course.instructor //this is also a way to access the value of instructor
const {instructor}=course //destructuring se bhi access kar sakte hai
console.log(instructor)

// {

//     name:"javascript",
//     price:"free",
//     instructor:"nishtha",   
//}
