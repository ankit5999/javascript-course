// map  ==> these are iterable
// store key value pair
// key can be of any type
// ordered garuntied

const person = {
    firstName:"Ankit",
    age:22,
    1:"one"
}

// console.log(person.firstName);
// console.log(person["firstName"]);

for(let key in person){
    console.log(typeof key); // string
}


const users = new Map();
users.set('firstName', 'Ankit')
users.set('age', 22)
users.set(1, "one") // 1 is number not string

// console.log(users);
console.log(users.get('age'));
console.log(users.get(1));
console.log(users.keys()); // gives keys

for(let key of users.keys()){
    console.log(key, typeof key);
}

for (let key of users){
    console.log(key); // it gives array // can also de destructure
    console.log(Array.isArray(key)); 
}

// destructuring
for (let [key, value] of users){
    console.log(key, value); 
}



const persons = new Map([['firstName', 'Ankit'], ['age' , 7]]);

console.log(persons);


const person1 = {
    id:1,
    firstName:"Ankit"
}

const extraInfo = new Map();

extraInfo.set(person1, {age:8, gender:"male"});

console.log(person1.id);
console.log(extraInfo.get(person1).gender);



////////// Clone Object.assign

const obj = {
    key1:'value1',
    key2:'value2'
}

// const obj2 = obj;
// const obj2 = {...obj}; // spred method
// or we can use new method as spred method 

const obj2 = Object.assign({},obj)
obj.key3 = "value3" // add in both to solve this we use spred
console.log(obj);
console.log(obj2);