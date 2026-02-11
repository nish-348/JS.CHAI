const a= new Number(78)
console.log(a)

//console.log(a.toString())// yeh number ko string me convert kar deta h

//console.log(a.toString().length) // yeh number ke length ko return kar deta h
console.log(a.toFixed(2))// yeh number ko fixed point notation me convert kar deta h...2 means 2 decimal places tak convert kar dega...agar 2 se zyada decimal places h toh usko round off kar dega...agar 2 se kam decimal places h toh uske baad 0 add kar dega...78 ko 78.00 me convert kar dega

const newnumber = 78.456789

console.log(newnumber.toPrecision(2))// yeh number ko specified precision me convert kar deta h...2 means 2 significant digits tak convert kar dega...78.456789 ko 80 me convert kar dega...kyunki 78.456789 me 2 significant digits h 7 aur 8...toh usko round off kar ke 80 me convert kar dega

console.log(newnumber.toPrecision(4))// yeh number ko specified precision me convert kar deta h...4 means 4 significant digits tak convert kar dega...78.456789 ko 78.46 me convert kar dega...kyunki 78.456789 me 4 significant digits h 7, 8, 4 aur 5...toh usko round off kar ke 78.46 me convert kar dega


//**********************************************************maths****************************************************** */

console.log(Math.PI) // yeh pi ka value return kar deta h

console.log(Math.E) // yeh e ka value return kar deta h

console.log(Math.sqrt(16)) // yeh number ka square root return kar deta h...16 ka square root 4 hota h

console.log(Math.pow(2,3)) // yeh number ko power me convert kar deta h...2 ka 3rd power 8 hota h

console.log(Math.abs(-5)) // yeh number ka absolute value return kar deta h...-5 ka absolute value 5 hota h

console.log(Math.round(4.6)) // yeh number ko round off kar deta h...4.6 ko 5 me round off kar dega

console.log(Math.floor(4.6)) // yeh number ko floor me convert kar deta h...4.6 ko 4 me convert kar dega

console.log(Math.ceil(4.2)) // yeh number ko ceil me convert kar deta h...4.2 ko 5 me convert kar dega

console.log(Math.random()) // yeh random number return kar deta h...0 se 1 ke beech me random number return kar dega

console.log(Math.max(1,2,3,4,5)) // yeh numbers me se maximum number return kar deta h...1,2,3,4,5 me se 5 maximum number h

console.log(Math.min(1,2,3,4,5)) // yeh numbers me se minimum number return kar deta h...1,2,3,4,5 me se 1 minimum number h 

console.log(Math.random()*10)   // yeh random number return kar deta h...0 se 10 ke beech me random number return kar dega...
// 0 se 1 ke beech me random number return karta h...usko 10 se multiply kar ke 0 se 10 ke beech me random number return kar dega

console.log(Math.floor(Math.random()*10 +1)) // yeh random number return kar deta h...0 se 10 ke beech me random number return kar dega...
// 0 se 1 ke beech me random number return karta h...usko 10 se multiply kar ke 0 se 10 ke beech me random number return
//  kar dega...usko floor me convert kar ke integer me convert kar dega...0 se 9 ke beech me random integer return kar dega

//+1 if 0.0 something value hoga toh usko 1 se multiply kar ke 1 me convert kar dega...toh 1 se 10 ke beech me random integer return kar dega

const min = 10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min)) // yeh random number return kar deta h...10 se 20 ke beech me random number return kar dega...
// 0 se 1 ke beech me random number return karta h...usko (max-min+1) se multiply kar ke 0 se (max-min) ke beech me random number return kar dega...usko min se add kar ke min se max ke beech me random number return kar dega...usko floor me convert kar ke integer me convert kar dega...10 se 20 ke beech me random integer return kar dega





