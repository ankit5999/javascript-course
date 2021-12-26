// function hello(){
//     console.log("hello world");
// }

// hello();



////////////// call

function about(hobby, favmusician){
    console.log(this.firstName, this.age, hobby, favmusician);
}

const user1 = {
    firstName:"Ankit",
    age:22,
    // about:function(hobby, favmusician){
    //     console.log(this.firstName, this.age, hobby, favmusician);
    // }
}

const user2 = {
    firstName:"Manish",
    age:21,
}


// user1.about();
// user1.about.call(user2, "Piano", 'Ali'); // from user1 we are calling about and using this we pass value from user 2
about.call(user2, "Piano", 'Ali'); 
// user1.about.call(); // undefined undefined


//////////// Apply

about.apply(user1, ["Music", "Bach"]) // same but extra arrgument pass in array

/////////// Bind

const func = about.bind(user1, "guiter", "huzrt")
func();


//// dont do this mistake

// const fun2 = about;
// fun2(); // undefined undefined undefined undefined


const fun2 = about.bind(user1, "band", "baja");
fun2();