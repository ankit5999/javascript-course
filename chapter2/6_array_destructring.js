/// Array destructuring // feature of es6

const myArray = ["value1", "value2", "value3"];

let [myvar1, myvar2, myvar3, myvar4] = myArray;

// myvar1 and myvar2 are two variable which will hold myArray values

console.log(myvar1);
console.log(myvar2);
console.log(myvar4); //undefined

// skipp value
[myvar1, , myvar2, myvar3] = myArray
console.log(myvar1, myvar2, myvar3);

// sprated array
let newArray = myArray.slice(1);
console.log(newArray);

/// or

let [myvar11, myvar12, ...mynewArray] = myArray
console.log(myvar11, myvar12, mynewArray);