// Getters and setters


class person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // fullName(){
    //     return `${this.firstName} ${this.lastName}`
    // }


    // want to use fullname as properties then
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    // setName(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    // 
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" "); // split and then store in var using destructuring
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new person("Ankit", "Yadav", 22);
// console.log(person1);
// console.log(person1.fullName());
console.log(person1.firstName);

// want to use fullname as properties then
console.log(person1.fullName);


// person1.setName("Manish", "Sharma");
// console.log(person1.fullName);

/// or using set we can do like this
person1.fullName = "Ankit Kumar"
console.log(person1.fullName);