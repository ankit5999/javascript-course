//////// Hoisting


// happen only in function decleration case not in function expression

hello(); // function call before decleration

function hello(){
    console.log("Hello world");
}


// function expression

// sum(3,2); // gives error

const sum = function(num1,num2){
    console.log(num1+num2);
}

sum(3,2) // works here



//////// or

console.log(userName); // undefined

var userName = "Hello World"  // in case of let and const gives error



///////////// function inside function

function app(){
    const myFun = () => {
        console.log("Hello from myfun");
    }

    const addTwo = (num1, num2) => {
        return num1+num2;
    }

    const mul = (num1, num2) => num1 * num2;

    console.log("Inside APP");
    myFun();
    console.log(addTwo(5,2));
    console.log(mul(3,2));
}

app();