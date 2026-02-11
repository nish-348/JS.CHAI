// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
// const myDate = new Date();
// console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// // We can use various methods to convert this date into more readable value.
// console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

// console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
// console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
// console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

// console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
// console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

// console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
// console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z

let mycreateddate = new Date('10-10-2023')
// console.log(mycreateddate.toDateString()) //Output : Mon Oct 09 2023    

// console.log(mycreateddate.toLocaleString())
// Output : 10/9/2023, 7:50:00 AM

let myTimeStamp = Date.now() // yeh current timestamp return kar deta h...number of milliseconds since January 01, 1970 return kar dega
console.log(myTimeStamp) //Output : 1696903800000

console.log(mycreateddate.getTime()) // yeh date ka timestamp return kar deta h...number of milliseconds since January 01, 1970 return kar dega...10-10-2023 ka timestamp 1696903800000 hota h

let myDate2 = new Date(1696903800000) // yeh timestamp ko date me convert kar deta h...timestamp ko date me convert kar ke return kar dega
console.log(myDate2.toString()) //Output : Mon Oct 09 2023 07:50:00 GMT-0700 (Pacific Daylight Time)

