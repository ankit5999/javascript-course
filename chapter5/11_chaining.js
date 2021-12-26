// optional chaining

const user = {
    firstName:"Ankit",
    address : {houseNumber:'1234'}
}

// console.log(user.address['houseNumber']); // gives error if address no given
// console.log(user.address); // gives undefined if address no given

// if want that it dont give error just give undefined because sometime
// value dont exist now but after some time it may exist ==> generally happen in react

console.log(user?.address?.houseNumber); // it gives undefined if address not exist

