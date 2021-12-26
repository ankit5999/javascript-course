//// Function in javascript


/////////////// function decleration /////////

// one way
function happyBirthday(){
    console.log("Happy Birthday to you ......");
}

happyBirthday();

// or pass value
function sum(value){
    console.log(value);
}

sum(2+4);
sum(8+2);

// or return

function add(data){
    return data;
}

let ans = add(4+3);
console.log(ans);

// or 

function sub(number1, number2){
    return number1 - number2;
}

let finalans = sub(4,1);
console.log(finalans);


console.log(undefined + undefined); // Not a Number

////////////////////////// Even and odd

function iseven(num){
    // return num%2===0 ? true : false;
    return num % 2 === 0; // or we can write like this
}

console.log(iseven(6));


//////// Return first char from string

function firstChar(str){
    return str[0];
}

console.log(firstChar("Ankit")); // A will return


/////////// return index of target from array

function findtarget(array,target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(findtarget([1,2,3,4,5,6], 4));







////////////////// Function expression /////////
// anonymus function ==> var name will treate as function name 

const addnumber = function(num1, num2){
    return num1 + num2;
}

const answer = addnumber(3,2);

console.log(answer);
