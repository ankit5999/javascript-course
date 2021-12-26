// Every method

const numbers = [2,3,4,5,6,7,8];

const ans = numbers.every((number)=>number%2==0);

console.log(ans);


// Example

const userCart = [
    {productId:1, productName: "Mobile", price: 300},
    {productId:2, productName: "Mobile", price: 300000},
    {productId:3, productName: "Mobile", price: 200},
    {productId:4, productName: "Mobile", price: 8000},
    {productId:5, productName: "Mobile", price: 500},
];

const product = userCart.every((cartItem)=>cartItem.price <= 30000)

console.log(product);




/// Some Method ==> give true if any one of condition is true

const data = [1,3,5,6,7];

// is there any no which is even

const answer = data.some((datavalue)=>datavalue%2==0)

console.log(answer);


// usercart

const answ = userCart.some((Cartitem)=>Cartitem.price > 100000)

console.log(answ);