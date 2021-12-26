// New Keyword

function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}

const user1 = new createUser("Ankit", 22); // if not write new then get undefined
// new keywork create empty object  ==> {}
// return this 

// console.log(user1);
user1.about();




////// more about new


function createUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`
}

createUser.prototype.is18 = function(){
    return this.age >= 18;
}

const user2 = new createUser("Ankit", "Yadav", "yadav@gmail.com", 22 , "myaddress");
console.log(user2);
console.log(user2.is18());  


for(let key in user1){
    console.log(key);
}


// i want it dont tell protoype wali key then

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}