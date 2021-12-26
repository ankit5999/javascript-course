// compilation
// code execution

// why compilation

// window is globle object ==> in browser
console.log(this);
console.log(window);
console.log(firstName);
console.log(myfunction());
var firstName = "Ankit";
console.log(firstName);

function myfunction(){
    console.log("this is a function");
}