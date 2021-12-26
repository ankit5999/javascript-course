/// primitive vs refrence data type


//primitive // store in stack
let num1 = 6;
let num2 = num1; // assigned seprated space for this in memory

console.log("Value of num1 is:", num1); // 6
console.log("Value of num2 is:", num2); // 6

num1++;
console.log("Value of num1 after increment is:", num1); // 7
console.log("Value of num2 after increment is:", num2); // 6



// refrence type // used heap to store data
// example array

let array1 = ["item1", "item2"];
let array2 = array1; // assigned same space or address not diffrent in memory

console.log("Value of array1 is:", array1); // ["item1", "item2"]
console.log("Value of array2 is:", array2); // ["item1", "item2"]

array1.push("item3")
console.log("Value of array1 after increment is:", array1); // ["item1", "item2", "item3"]
console.log("Value of array2 after increment is:", array2); // ["item1", "item2", "item3"]

