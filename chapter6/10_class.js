// class are fake in js


class createUser{
    constructor(firstName, lastName, email, age, address){
    console.log("constructure called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`
    }
    is18(){
        return this.age >= 18;
    }
}

const user1 = new createUser("Ankit", "Yadav", "yadav@gmail.com", 22 , "myaddress");

console.log(Object.getPrototypeOf(user1));
// console.log(user1);
// console.log(user1.firstName);
// console.log(user1.is18());