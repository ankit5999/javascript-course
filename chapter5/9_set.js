// Set in js
// it is iterable
// set has its own methods
// no index-based access
// order is not garunty
// unique item only


// const numbers = new Set([1,2,3]);
const String = new Set("Ankityadav");
console.log(String);

const items = ['item1', 'item2', 'item3']
const numbers = new Set();

numbers.add(1);
numbers.add("Ankit");
numbers.add(items);
numbers.add(['item11', 'item12']); // both will add now 
numbers.add(['item11', 'item12']); // because they store in diff place in memory

console.log(numbers);

if(numbers.has(1)){
    console.log("1 is Present");
}
else{
    console.log('1 is not present');
}


// extract unique element from array
const myArray = [1,2,4,4,5,5,5,6];

const uniqueElements = new Set(myArray);

console.log(uniqueElements);
console.log(myArray);

// fing length

let length = 0;

for(let element of uniqueElements){
    length++;
}

console.log(length);