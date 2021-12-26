// Find Method

const myArray = ["Mango", "Apple", "Banana", "Kivi", "Orange"];

function isLength6(string){
    return string.length === 6;
}

const ans = myArray.find(isLength6)

console.log(ans);



// Example

const users = [
    {userId: 1, userName:"Ankit"},
    {userId: 2, userName:"Manish"},
    {userId: 3, userName:"Deepak"},
    {userId: 4, userName:"Amit"},
]

const myuser = users.find((user)=>user.userId===3)
console.log(myuser);