// if else

let age = 18

if (age < 18){
    console.log("You are under 18");
}
else{
    console.log("You are above 18");
}

let num = 14

if(num%2 === 0){
    console.log("Even");
}
else{
    console.log("Odd");
}


// truthy and falsy value

// falsy values

// false
// ""
// null
// undefined
// 0 


// let firstName = ""; //false
// let firstName; //false
// let firstName = null; //false
// let firstName = false; // false
// let firstName = 0; // false
let firstName = "Ankit"; // gives name

if(firstName){
    console.log(firstName);
}
else{
    console.log("First name is Empty");
}



/////////// Nested if else

// win_number = 20;

// number = +prompt("Entera No b/w 1-100 : ");

// if (win_number === number){
//     console.log("You guess Right Number");
// }

// else{
//     if (number < win_number){
//         console.warn("Too Low");
//         number = +prompt("Entera No b/w 1-100 : ");
//     }
//     else{
//         console.warn("To Height");
//         number = +prompt("Entera No b/w 1-100 : ");
//     }
// }




//// Switch statement

let day = 5

switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednessday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("There are only 7 days in a week.");
}