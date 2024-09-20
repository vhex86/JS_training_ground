'use strict'
const words = ["Hello", "world", "how", "are", "you"];
const concatenatedString = words.reduce((accumulator, currentValue) => accumulator + " " + currentValue, "");
console.log(concatenatedString); // Выведет: "Hello world how are you"
console.log(typeof concatenatedString); 
