// array are good but not sufficient for real world data hence we need objects
// object is refrense type like array
// object dont have index


const person = {name:"Ankit", age:22, city:"Delhi"};
console.log(person);
console.log(typeof person);

// excess data from object
console.log(person.name, person.age);

// or
console.log(person["name"]); // Ankit

const human = {
    name:"Ankit",
    age:22,
    city:"Delhi",
    hobbies:["Piano", "Listening music"], // array in object
    "person hobbies" : ["Piano", "music", "song"] // use key as string when we have to use spaces
}

console.log(human.hobbies);
console.log(human["person hobbies"]);

// add key value pair in object

human.gender = "male"
console.log(human);


// or

human["person"] = "male";
console.log(human);
