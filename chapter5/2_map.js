/// map method

const numbers = [1,4,6,8];

// numbers.map((data) => {
//     console.log(data*data);
// })

// or

const square = function(number){
    return number*number; // if not use return then will say undefined
}

const ans = numbers.map(square);

console.log(ans);


const users = [
    {firstname: "Ankit", age: 21},
    {firstname: "Manish", age: 22},
    {firstname: "Deepak", age: 21},
    {firstname: "Aditya", age: 21},
]


users.map((user)=>{
    console.log(user);
    // console.log(user.firstname);
})