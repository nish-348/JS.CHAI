//for of
const arr=[1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}

//map
const map=new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
//console.log(map);
for (const [key,value] of map) {
    console.log(`${key}: ${value}`);
}
//objest
const myobject={
    name: "John",
    age: 30,
    city: "New York"
};
//objects are not iteratable but we can use for in loop to iterate over the properties of an object
