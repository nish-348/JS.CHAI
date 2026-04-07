const myobject = {  
    name: "John",
    age: 30,
    city: "New York"
};
for (const key in myobject) {
    console.log(`${key}: ${myobject[key]}`);
}  

//array
const myarray=["apple", "banana", "orange", "grape", "kiwi"];
for (const key in myarray) {
    console.log(key);
    
    
}
// FOR in DESCRIPTION       =>     it works for ARRAY and OBJECT but not works on MAP
// FOR of DESCRIPTION      =>     it works for ARRAY and MAP[ key, value] but not works on OBJECT.
// FOR each DESCRIPTION =>     it works for ARRAY, OBJECT and MAP.

// NOTE: I  am also new to JS so the above statements are my own analysis.

