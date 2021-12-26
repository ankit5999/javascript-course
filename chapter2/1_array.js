////// Arrays - ordered collection of item // can say array is an object  // array is mutable

let fruits = ["apple", "mango", "orange", "banana", "kivi"];
let numbers = [1,2,3,4,5,6,7,8,9];
console.log(fruits);
console.log(fruits[2]);
console.log(numbers);

let mixed = [1,2,3, 1.2,2.2,3.3, "Apple", ["Orange"]];
console.log(mixed);

fruits[1] = "Grapes"
console.log(fruits);

console.log(typeof fruits); // object

console.log(Array.isArray(fruits)); // to check is it array or not //true


// object 

let obj = {} // object literal
console.log(typeof obj); //object
console.log(Array.isArray(obj)); // false

