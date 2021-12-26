// string

let firstName = "Ankit"


// A n k i t
// 0 1 2 3 4
console.log(firstName[2]);

console.log(firstName.length);


// spaces are also counted.
// string are immutable

//last index
console.log(firstName[firstName.length-1]);


//////////////////////

// 1 trim() // to remove space

let fullName = "         Ankit           "
console.log(fullName.length);

fullName = fullName.trim()
console.log(fullName.length);



/// 2 uppercase
let uppercase = fullName.toUpperCase();
console.log(uppercase);

let smallcase = fullName.toLowerCase();
console.log(smallcase);



// slicing

let newString = fullName.slice(0,3); // go till 2nd index not 3rd

console.log(newString);

let newString2 = fullName.slice(2);
console.log(newString2);
