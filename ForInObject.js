'use strict'
const SYM = Symbol();
const x = {a:1, b: 2, c: 3, [SYM]:4 };
for (let property in x){
console.log(`${property}: ${x[property]}`);
}
console.log('Вывод объекта с помощью forEach');
Object.keys(x).forEach(prop => console.log(  `${prop}: ${x[prop]}`))