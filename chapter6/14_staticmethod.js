// static method and properties

class person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // static method
    static classInfo(){
        return `this is person class.`
    }

    // static peopeties
    static desc = "static propertie"

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" "); // split and then store in var using destructuring
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(){
        return `${this.firstName} is eating.`
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const person1 = new person("Ankit", "Yadav", 22);
console.log(person1.eat());
console.log(person.classInfo());
console.log(person.desc);