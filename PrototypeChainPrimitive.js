'use strict';

function  Bacteria(){

this.canSwim = true;
this.immunity = true;

}


function Fish(name){
this.name = name;
}

Fish.prototype = new Bacteria();

function Dog(name){
this.name = name;
this.canSwim = false;
}
Dog.prototype = new Fish();
Dog.prototype.constructor = Dog;
let FishX = new Fish('Tix');
let Tusik = new Dog('Boss');
let x = Tusik instanceof Fish ? 'Тузик не пес' : 'Тузик пес';

console.log(FishX.immunity);
console.log(FishX.name);
console.log(Tusik.name);
console.log(Tusik.canSwim);
console.log(x);
