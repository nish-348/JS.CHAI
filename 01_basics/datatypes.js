//primitive

//types:string,number,boolean,null,undefined,symbol,BigInt

//refference(non primitive)

//types:object,array,function

//primitive types ke andar jo value store hoti hai wo directly variable ke andar store hoti hai
//refference types ke andar jo value store hoti hai wo memory me kisi alag jagah store hoti hai, aur variable ke andar us jagah ka address store hota hai

//

//2 years ago
//Primitive DataTypes:


//1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
//2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

//3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

//4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

//5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

//6.Symbol (ES6): it is mostly used used to find uniqnece.

//7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

 //Refence (Object Data Types):

//1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

//2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

//3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

//4.Date: Represents dates and times.

//5.RegExp: Represents regular expressions for pattern matching.

//lets talk about some Range of Primitive DataType:

  //  1.Number:
    //    Represents both integers and floating-point numbers.
      //  Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        //Smallest Increment: 2^(-52).

   // 2.String:
      //  Represents a sequence of characters.
        //No specific range limit, but practical limits depend on memory and system resources.

    //3.Boolean:
      //  Represents true or false.
        //Only two possible values: true and false.

    //4.Undefined:
      //  Represents a variable that has been declared but hasn't been assigned a value.
        //It has only one possible value: undefined.

   // 5.Null:
     //   Represents the intentional absence of any object or value.
       // It has only one possible value: null.

    //6.Symbol (ES6):
      //  Represents a unique and immutable value.
        //No specific range limit.

    //7.BigInt (ES11):
      //  Represents large integers that cannot be represented by the Number type.
        //The range is practically unlimited and depends on available memory.



//*************************************************************************************************************************************************
//memory

//stack and heap

//stack: it is used to store primitive data types and function calls. it is faster than heap because it is organized in a last in first out (LIFO) manner. it has a limited size and if we try to store more data than its capacity it will throw an error called stack overflow.
//stack memory me jo bhi save hoga uska copy milega

//heap: it is used to store reference data types. it is slower than stack because it is not organized in a specific manner. it has a larger size than stack and it can grow and shrink dynamically as needed. when we create an object or an array, it is stored in the heap and the variable that references it stores the address of that location in the heap.
//heap me jo bhi karenge wo refference leke original file me change karenge



