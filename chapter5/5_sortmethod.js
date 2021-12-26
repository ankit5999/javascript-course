// Sort method // change original array


// works fine with string
const users = ["Manish", "Ankit", "deepak", "Aditya"] // capital will come first after sort

console.log(users.sort());


// 
const numbers = [5,9,1200,34,4000,2100,678];

// numbers.sort(); // [1200, 2100, 34, 4000, 5, 678, 9]
// console.log(numbers);


const ans  = numbers.sort((a,b) => {
    return a-b; // for desending b-a
})

console.log(ans);


// example // lowtoHigh // highToLow

const products = [
    {productId:1, productName: "Mobile", price: 300},
    {productId:2, productName: "Mobile", price: 3000},
    {productId:3, productName: "Mobile", price: 200},
    {productId:4, productName: "Mobile", price: 8000},
    {productId:5, productName: "Mobile", price: 500},
];

// lowToHigh
// slice to not change original
const lowToHigh = products.slice(0).sort((a,b)=>{return a.price - b.price})

console.log(lowToHigh);


// hightToLow

const highTOLow = products.slice(0).sort((a,b)=>{return b.price - a.price})

console.log(highTOLow);