const obj1 = {
    key1:"value1",
    key2:"value2"
}

// const obj2 = {}
// obj2.key3 = "value3"

// // console.log(obj2.key2); // undefined

//// we want if key not in obj2 then go to obj1

const obj2 = Object.create(obj1);
obj2.key3 = "value3"

console.log(obj2.key2); // value2

console.log(obj2.__proto__); //{key1: 'value1', key2: 'value2'}


