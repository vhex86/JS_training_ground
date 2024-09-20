"use strict"

let age = "37";

function greet(name){

    console.log(`Hello, ${name}`);
}

function getBirthYear(){

    return new Date().getFullYear();
}
greet("Vlad");
console.log(getBirthYear());