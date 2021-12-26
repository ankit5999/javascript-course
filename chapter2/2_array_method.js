//// arrey methods

let fruits = ["Apple", "Mango", "Orange"]

console.log(fruits);

// push
fruits.push("Banana") // add at last in array
console.log(fruits);

// pop

let poped = fruits.pop() // remove last element // it also return that element
console.log(fruits);
console.log("poped fruits is:", poped);


/// unshift // add at first position // slower then push

fruits.unshift("Kivi", "Banana") // can add multiple also
console.log(fruits);


// shift remove from starting // slower then pop

let shifted = fruits.shift()
console.log(fruits);
console.log("removed fruits is:", shifted);
