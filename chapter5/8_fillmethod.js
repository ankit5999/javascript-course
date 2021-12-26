// fill method


const myArray = new Array(10).fill(0);
console.log(myArray);

const myData = [1,2,3,4,5,6,7,8,9];

console.log(myData.fill(0,2,5));


////// Splice method // change original array

const value = ['item1', 'item2', 'item3', 'item4'];

// delete
console.log(value.splice(1,1));
console.log(value);

// insert
value.splice(1,0,'item2 {inserted}');
console.log(value);


// insert and delete together

value.splice(1,3,"inserted item1", "inserted item2")
console.log(value);


// iterables => on which we can use for of loop like string and array
// objects are not iterable 

// array like object => jinke pass length property hoti hai, our 
// jinko hum index se access kar sakte hai example ==> string


// example
 const firstName = "Ankit"
 console.log(firstName[4]);
 