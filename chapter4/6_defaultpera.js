// Default Perameter

// before es15 // how we handel undefined
function addTwo(a,b){
    if(typeof b==="undefined"){
        b = 0;
    }
    return a+b
}

const ans = addTwo(4); // passed only one perameter
console.log(ans);


// after es 15

function addTwoNum(a,b = 0){
    return a+b
}

const answer = addTwoNum(4);
console.log(answer);



/////// Rest Perameter [...] /////// 

function myFun(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myFun(3,4,5,6,7,8);
// output a is 3 b is 4 c is 5,6,7,8


///

function addAll(...num){
    console.log(num);
    let total = 0;
    for(let nums of num){
        total = total+nums;
    }
    return total;
}

const myans = addAll(1,2,3,6,7,8);
console.log(myans);