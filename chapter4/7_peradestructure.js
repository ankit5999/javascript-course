// Peram destructuring


const person = {
    firstName:"Ankit",
    gender:"male",
    age : 500
}

// function printdetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// destructuring

function printdetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printdetails(person);