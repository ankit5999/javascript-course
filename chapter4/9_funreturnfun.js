/// Function return a function

function myFun(){
    // return ['a', 'b', 'c']
    return function funHello(){
        return "Hello World"
    }; // returning function
}

const ans = myFun();

console.log(ans); // gives function
console.log(ans()); // Hello World