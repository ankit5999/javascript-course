
const key = "email"
const person = {
    name:"Ankit",
    age:22,
    city:"Delhi",
    "person hobbies" : ["Piano", "music", "song"] 
}

// add key value as a key with its value to object
person[key] = "person@gmail.com"
console.log(person);

//// for in loop

for(let keys in person){
    // console.log(keys); //keys will get
    // console.log(person[keys]); // key value will get
    // console.log(`${keys} : ${person[keys]}`); // key value with key will get

    // or
    console.log(keys, ":" , person[keys]); // key value with key will get
}



//// object.keys

console.log(Object.keys(person)); //gives array

for(let keys of Object.keys(person)){
    console.log(person[keys]);
}


/// more about keys

// var myObject = {};
// var arr = [1,4,6,8,5,2]
// var myarr = [];
// for(let i=0; i<arr.length; i++){
//     if(i%2===0){
//         myObject[i] = arr[i];
//     }
// }

// console.log(myObject);
// console.log(Object.keys(myObject)[Object.keys(myObject).length-1]); // gives key
// // myObject[Object.keys(myObject)[Object.keys(myObject).length-1]] // gives value