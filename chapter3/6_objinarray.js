// object in array

const users =[
    {userId:1, firstName:"Ankit", gender:"male"},
    {userId:2, firstName:"Manish", gender:"male"},
    {userId:3, firstName:"Deepak", gender:"male"},
]

// console.log(users);

for(let user of users){
    // console.log(user);
    console.log(user.firstName);
}



/////////// Nested Destructuring ===>>>

// const [user1, user2,user3] = users;
// console.log(user1);

// destucture values from object
const [{firstName : user1firstName}, , {gender}] = users; // change firstName to user1firstName

console.log(user1firstName, gender);