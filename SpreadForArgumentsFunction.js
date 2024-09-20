'use strict'

function CreateCoolWords (word, ...coolEnd){


    const NewCoolWords =[];
       for (let i = 0; i < coolEnd.length; i++ ){
    
         NewCoolWords[i] = word + coolEnd[i];
    
       } 
    return NewCoolWords;
    
    
    }
    
    
    let x = CreateCoolWords('Их', 'ний', 'тиандр');
    console.log (x);