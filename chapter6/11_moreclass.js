// class Properties

class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating.`
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}


const animal = new Animal("Tiger", 2);
console.log(animal);
console.log(animal.eat());


/// Dog class

// class Dog{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `${this.name} is eating.`
//     }
// }

// const tomy = new Dog("Tomy", 1);
// console.log(tomy);


//// short method dont repeat code...

class Dog extends Animal{
    
}


// objects are also called instense

const tomy = new Dog("Tomy", 1);
console.log(tomy);