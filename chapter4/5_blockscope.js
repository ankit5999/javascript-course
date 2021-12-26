// Block Scope vs Function Scope

// let and const are block scope // can excessable inside block only
// var is function scope


// block 1
{
    let firstName = "Ankit"
    console.log(firstName); // Ankit

    const fullName = "Ankit Kumar"
    console.log(fullName); // Ankit Kumar
}
// console.log(firstName); // error
// console.log(fullName); // error





// block 2
{
    var firstName = "Ankit Yadav"
    // console.log(fullName); // error
}

console.log(firstName); // Ankit Yadav


// block 3

{
    console.log(firstName); // Ankit Yadav
}






/////////// Example

if(true){
    let myname = "Manish"; // its scope is only in if block
    var myfullName = "Manish Sharma"
    console.log(myname);
}

// console.log(myname); // error
console.log(myfullName); // Manish Sharma