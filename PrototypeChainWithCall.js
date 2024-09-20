'use strict'




function Animal(name){

this.name = name;

}

Animal.prototype.eat  = function(){

    console.log(`${this.name} is eating`);

};

function Dog(name, breed){
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const Rex = new Dog ('Buddy', 'Golden Retriever');
Rex.eat();
