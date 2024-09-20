// 'use strict'
const o = {
name: 'Vlad',
greetBackwards: function(){

function getReverseName(){

let nameBackwards = ' ';
for (let i = this.name.length - 1; i >= 0 ; i--){

nameBackwards += this.name[i];

}
return nameBackwards;

}
return `${getReverseName()}` ;
}



};
console.log(o.greetBackwards());


//// Проблема в этом коде заключается в использовании функции  getReverseName  внутри метода  greetBackwards . Внутри функции  getReverseName  используется ключевое слово  this , которое в данном контексте ссылается на объект  window , а не на объект  o . Это происходит из-за того, что вложенные функции не имеют своего собственного контекста  this  и используют глобальный объект  window  по умолчанию. 

const o1 = {
    name: 'Vlad',
    greetBackwards: function(){
        const self = this;
    function getReverseName(){
   
    let nameBackwards = ' ';
    for (let i = self.name.length - 1; i >= 0 ; i--){
    
    nameBackwards += self.name[i];
    
    }
    return nameBackwards;
    
    }
    return `${getReverseName()}` ;
    }
  
    
    
    };

    console.log(o1.greetBackwards());


// Здесь все хорошо.