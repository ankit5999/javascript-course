const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18 : function(){
        return this.age >=18
    },
}

function createUser(firstName, lastName, email, age, address){
    // const user = {}; // still problem 
    const user = Object.create(userMethods); // solved using proto 
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}


const user1 = createUser("Ankit", "Yadav", "yadav@gmail.com", 22, "my address");
const user2 = createUser("Manish", "Sharma", "manish@gmail.com", 21, "my address");
console.log(user1, user2);





