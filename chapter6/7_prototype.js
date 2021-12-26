// prototype

// in js we can treate function as an obj

function hello(){
    console.log("hello world");
}

console.log(hello.name); // telling function name properties

// name property ---> tell function name
// can create our own properties

hello.myOwnProperty = 'very unique properties';

console.log(hello.myOwnProperty);


// function gives us a free space that is called prototype

console.log(hello.prototype); // {} 

// only functions provides prototype prototype property.

if(hello.prototype){
    console.log("prototype present");
}
else{
    console.log("prototype not present");
} // present

// check for object

const myobj = {key1:"value1"}
if(myobj.prototype){
    console.log("prototype present");
}
else{
    console.log("prototype not present");
} // not present


hello.prototype.abc = "abc";
hello.prototype.xyz = "zyx";
// adding function
hello.prototype.sing = function(){
    return "lalalala..."
}
console.log(hello.prototype);





///////////////


function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype); 
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`
}

createUser.prototype.is18 = function(){
    return this.age >= 18;
}

const user1 = createUser("Ankit", "Yadav", "yadav@gmail.com", 22 , "myaddress");
console.log(user1);