// Reduce method // gives one value

const numbers = [1,2,3,4,5,6,7];

const sum = numbers.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
})

console.log(sum);


// accumulator , currentvalue, return
//    1              2           3
//    3              3           6
//    6              4           10
//    10             5           15
//    15             6           21
//    21             7           28
// ans  ==> 28


 const usercart = [
     {productID: 1, productName: "Mobile", price: 12000},
     {productID: 2, productName: "Laptop", price: 22000},
     {productID: 3, productName: "TV", price: 15000},
 ];


const totalammount = usercart.reduce((totalprice, currentproduct) => {
    return currentproduct.price + totalprice
}, 0 )

console.log(totalammount);


// totalprice currentprice  return
//     0        {12000}     12000
//   12000      {22000}     34000
//   34000      {15000}     49000

// totalammount ==> 49000