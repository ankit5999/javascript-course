// for loop in array

let fruits = ["Apple", "Mango" ,"Grapes", "Kivi"]
let newFruits = []

for (let i = 0; i< fruits.length; i++){
    newFruits.push(fruits[i].toUpperCase())
}

console.log(newFruits);

// last index
console.log(fruits[fruits.length-2]);



// use const for creating array

const fruit = ["Apple", "Mango"]

fruit.push("Kivi")
console.log(fruit);

// while loop with array
let i = 0

while(i<fruit.length){
    console.log(fruit[i]);
    i++;
}

//////////// for of loop
// use when we want array data so easily we can get 

fruits = ["Apple", "Mango", "Kivi", "Banana"]

for (let frt of fruits){
    console.log(frt);
}


///////// for in loop 

for(let index in fruits){
    // console.log(index); // it wil/ give index
    console.log(fruits[index]); // it will give data of array
}

