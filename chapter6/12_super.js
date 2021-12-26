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

class Dog extends Animal{
    constructor(name,age, speed){
        super(name,age);
        this.speed = speed;
    }

    eat(){
        return `Modified eat : ${this.name} is eating.`
    }

    run(){
        return `${this.name} running at ${this.speed} km/hr speed.`
    }
}


const tomy = new Dog("Tomy", 1, 47);
console.log(tomy);
console.log(tomy.run());
console.log(tomy.eat());