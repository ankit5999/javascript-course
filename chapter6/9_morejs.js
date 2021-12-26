// prototype
// let numbers = [1,2,3];
// or
let numbers = new Array(1,2,3)
console.log(numbers);

console.log(Object.getPrototypeOf(numbers));


function hello(){
    console.log("hello");
}

console.log(hello.prototype);

// change prototype
hello.prototype = [];
console.log(hello.prototype);
// push
hello.prototype.push('1')
console.log(hello.prototype);