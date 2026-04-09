const nums=[1,2,3,4,5,6,7,8,9,10];
const newnums=nums.filter(num=>num<5);

console.log(newnums);

//filter method creates a new array with all elements that pass the test implemented by the provided function.      
//  In this case, the test is num => num < 5, which will return true for any number less than 5. Therefore, the newnums array
//  will contain all the numbers from the original nums array that are less than 5. The output will be [1,2,3,4].

//basically value ko ek ek kark call kiya jaayega acccording to condition jo given hoga waha pe


//example
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
let reqbooks=books.filter((bk) =>bk.genre==='Fiction');
reqbooks=books.filter((bk) =>{return bk.genre==='Fiction' && bk.publish>1980} );
 //This will filter the books that have genre as Fiction and publish year greater than 1980

console.log(reqbooks);

//This will print an array of objects that have the genre property equal to 'Fiction'. The output will be:
// [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }

// ]

//ARROW KE BAAD IF SCOPE OPEN HORAHA H TOH USME RETURN USE KARENGE AUR IF SCOPE NAHI OPEN HORAHA H TOH USME RETURN USE NAHI KARENGE
