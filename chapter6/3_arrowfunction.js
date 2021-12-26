// Arrow Fumctions // arrow function ka khud ka this nahi hota surrounding ka this lata hai
// we cant change this of arrow function


const user1 = {
    firstName:"Ankit",
    age:22,
    about:()=>{
        console.log(this.firstName, this.age);
    }
}

const user2 = {
    firstName:"Manish",
    age:21,
    about(){
        console.log(this.firstName, this.age);
    }
}

user1.about(); // undefined undefined
user2.about(); // Manish 21

