/// filter method


const numbers = [1,2,3,4,5,6,7];

const iseven = function (number){
    return number % 2 === 0;
}

const ans = numbers.filter(iseven);

console.log(ans);