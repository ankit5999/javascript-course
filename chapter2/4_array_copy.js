
let array1 = ["item1", "item2"];
let array2 = array1;
console.log(array2 === array1); //true

//clone array  

// brottforce method
let array11 = ["item1", "item2"];
let array12 = ["item1", "item2"];
console.log(array12 === array11); //false
array11.push("item3")

console.log(array11); // ["item1", "item2", "item3"]
console.log(array12); // ["item1", "item2"]


// use slice method to copy // optimal way to copy // fast
let array111 = ["item1", "item2"];
let array112 = array1.slice(0)
array112 = array1.slice(0).concat("item3", "item4") // adding new item after copying
console.log(array111 === array112); 
array111.push("item3")
console.log(array111); // ["item1", "item2", "item3"]
console.log(array112); // ["item1", "item2"]


// another way

aray4 = ["item1", "item2"];
aray5 = [].concat(aray4, ["array3" , "array4"])

console.log(aray4 === aray5); // false 
console.log(aray5);

/// new way --- spred opertaor // used in react js

let array7 = ["item1", "item2"];
let array8 = [...array7];
array8 = [...array7, "item3" , "item4", "item5"];

console.log(array7 === array8); //false
console.log(array8);