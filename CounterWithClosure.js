'use strict'
function mySuperCounter(){
let x = 0;

function counter(){
x = x + 1;
    return x;

}

return counter;
}
const myCount = mySuperCounter();
const myCount1 = mySuperCounter();


console.log (mySuperCounter());

console.log (myCount());
console.log (myCount());
console.log (myCount1());

