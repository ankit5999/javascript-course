//// lexical scope

const myvar = "value1" // globle scope

function myApp(){
    // const myvar = "value1"

    function myFunc(){
        // const myvar = "value15" // local scope
        console.log("Inside myFunc", myvar);
    }

    const myFunc2 = function(){}
    const myFunc3 = () => {}

    console.log(myvar);
    myFunc();
}

myApp();