// closures

function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }

    return printName;
}

const ans = printFullName("Ankit", "Yadav");
ans();



// example 2

function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){
        console.log(a,b,x);
    }
}

const answer = hello("arg");
answer();


// example 3

// function myfunction(power){
//     return function(number){
//         return number ** power;
//     }
// }

// or shortcode
const myfunction = power => number => number ** power;

const cube = myfunction(3);
const answ = cube(2);
console.log(answ);


// example 4

