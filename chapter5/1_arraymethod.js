// Important Array Methods

// forEach
// map
// filter
// reduce


///////////////////// Impact analitics interview Question

// var object = {
// name: 'John',
// details: {
// id: 308,
// address: {
// city: ['Bangalore']
// }
// }
// }

// console.log([object.name, object.details.id, ...object.details.address.city]);

const numbers = [1,2,3,4,5];

function multiplyby2(number, index){
    console.log(`index is ${index} and number is ${number*2}`);
}

// for(let i=0; i<numbers.length; i++){
//     multiplyby2(numbers[i], i); // i is index
// }

// or

// numbers.forEach(multiplyby2); 



///////// Or

numbers.forEach(function(number, index){
    console.log(`index is ${index} and number is ${number*2}`);
});




const user = [
    {firstname: "Ankit", age: 21},
    {firstname: "Manish", age: 22},
    {firstname: "Deepak", age: 21},
    {firstname: "Aditya", age: 21},
]

// user.forEach(function(users){
//     console.log(users.firstname);
// })



// arrow function

user.forEach((users,index)=>{
    console.log(users.firstname, index);
})