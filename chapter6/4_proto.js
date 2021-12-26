// const user = {
//     firstName:"Ankit",
//     lastName:"Yadav",
//     email:"yadav@gmail.com",
//     age:22,
//     address:"House No, Colony, Pincode, State",
//     about:function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18:function(){
//         return this.age >=18;
//     }
// }

// function

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`
    };
    user.is18 = function(){
        return this.age >=18;
    };
    return user;
}


const user1 = createUser("Ankit", "Yadav", "yadav@gmail.com", 21, "m address");
console.log(user1);
const isyoung= user1.is18();
console.log(isyoung);
console.log(user1.about());


// jitne user bane ge uthne methods bane ge jo galet hai
/// is code m ye kami hai next file m solution hai
