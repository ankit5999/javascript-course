//////// Object Oriented JavaScript

// Methods ==> function inside object

function personInfo(){
    console.log(`person is ${this.firstName} and age is ${this.age}`);
}

const person = {
    firstName: "Ankit",
    age : 8,
    about : personInfo
    // function(){
    //     console.log(`person is ${this.firstName} and age is ${this.age}`);
    //     // this is object and this.age means in this object we have age and access its value
    // }
}

const person1 = {
    firstName: "Manish",
    age : 8,
    about : personInfo
}


const person3 = {
    firstName: "Deepak",
    age : 8,
    about : personInfo
}


person.about(); // ankit age is 8
personInfo(); // undefined
person1.about(); // manish and age 8


console.log(this); //window object
console.log(window); //same as this this==window


function myfun(){
    console.log("Hello World");
    "use strict"
    console.log(this);
}

myfun();
window.myfun(); // Hello World