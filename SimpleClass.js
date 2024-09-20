'use strict'
class MyAwesomeClass{

constructor(){
    this.myProperty = 42;
}

myMethod() {
    return this.myProperty;
}


}

let x = new MyAwesomeClass();

console.log(x.myMethod());