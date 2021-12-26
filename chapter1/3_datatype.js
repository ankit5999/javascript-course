// premitive data type

// string "ANkit"
// number "1,2 ,3"
// boolean "trune false"
// undefined
// null
// Bigint
// Symbole

let age = 22;
let firstName = "Ankit"

console.log(typeof(age));
console.log(typeof(firstName));


/// convert from number to string
age = 22 + ""
//or
// age = string(age)
console.log(age);
console.log(typeof(age));


/// string to number conversion

let mystr = "34"
console.log(typeof(mystr));

mystr = +"34";
//or
// mystr = number(mystr)
console.log(typeof(mystr));







//////////////// string concatination

let str1 = "Ankit"
let str2 = "Yadav"

let full_str = str1 + " " + str2
console.log(full_str);

let str11 = "10"
let str12 = "20"

let full_str2 = +str11 + +str12
console.log(full_str2);
console.log(typeof(full_str2));

let aboutMe = "My name is " + full_str + " and my age is " + str12
console.log(aboutMe); 

// or

aboutMe = `My name is ${full_str} and my age is ${str11}`
console.log(aboutMe);

console.log(typeof aboutMe, firstName);

var nothing = null
console.log(typeof nothing,nothing); // gives object  // its bug its null not object

var myName;
console.log(myName);

let myNumber = 123;
console.log(Number.MAX_SAFE_INTEGER); // tell how big no can store

myNumber = BigInt(1234)
// or 
let myNumber2 = 123n; //its also nig int
console.log(myNumber);
console.log(typeof myNumber2);

// cant add bigint and int
// on bigint all opetation perform only with bigint

