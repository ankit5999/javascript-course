/// spread Operator with object


const obj1 = {
    key1:"value1",
    key2:"value2"
};

const obj2 = {
    key3:"value3",
    key4:"value4",
    key1:"valueUniuqe"
};

// const newObj ={...obj1, ...obj2} // key1 will only once // valueUniuqe
const newObj ={...obj2 , ...obj1} // key1 will only once // value1
console.log(newObj);


const newobj = {..."abcdefgh"}
console.log(newobj);