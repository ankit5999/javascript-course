//// while loop

// let i = 0

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// sum of n natural no

// let num = 10
// total = 0

// while(num > 0){
//     total = total + num;
//     num--;
// }

// console.log(total);


// other way to solve this

let n = 10

console.log(n*(n+1)/2);


// //////// for loop

for(var i = 0 ; i<10 ; i++){
    console.log(i);
}

// if use let then this will not work
console.log("Value of i is ", i);


/// sum

let sum  = 0 
for(num = 10; num > 0; num--){
    sum = sum+num
}

console.log(sum);



////////////// break keywork

for( let i = 0; i<10; i++){
    if(i === 4){
        break
    }
    console.log(i);
}

console.log("Loop Over");


////////////// Contiue keywork

for( let i = 0; i<10; i++){
    if(i === 4){
        continue
    }
    console.log(i);
}

console.log("4 Not printed");






/////////////// Do while loop

i = 10

do{
    console.log(i);
    i++;
}while(i<=9)