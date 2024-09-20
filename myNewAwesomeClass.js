class Animal {

constructor (name){
    this.name
}
eat(){
    console.log('Ohm Ohm');
}
}


class Dog extends Animal {
 constructor (name, breed){

 super(name);
    this.breed = breed;
 }



}

let Tusik = new Dog('Rex', 'Dvornyaga');
console.log(Tusik.breed);
console.log(Tusik.eat())