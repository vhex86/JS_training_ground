'use strict'

const u1 = {name: 'Vlad'};
const u2 = {name: 'Boris'};
const u3 = {name: 'Alex'};

const userRoles = new Map();
userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3,'Admin');

// console.log (userRoles.get(u3));
// console.log (userRoles.size);

for(let u of userRoles.entries()) {

console.log (`${u[0].name}: ${u[1]}`);

}

 let x = [...userRoles.keys()];
 console.log(x);