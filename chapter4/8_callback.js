// callback function

// functiona as a input and call it back is called callback

function myFun(callback){
    console.log("Hello callback");
    callback("ankit");
}

// myFun([2,3,4,5,6]);
// myFun(myname="Ankit")


function myfun2(myname){
    console.log("Hello World");
    console.log(`${myname}`);
}


myFun(myfun2);