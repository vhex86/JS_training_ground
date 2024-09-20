'use strict'
class Animal{
constructor(name){
    this.name = name;
}
eat(){
  console.log(`${this.name}  is eating`);
}
}
class Dog extends Animal {
    bark(){
        console.log(`${this.name} is barking`);
    }
}
const Tusik = new Dog('Max');
Tusik.bark(); //Tusik is barking
Tusik.eat(); //Tusik is eating