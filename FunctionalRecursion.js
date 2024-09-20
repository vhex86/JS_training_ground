'use strict'
const g = function f(stop){

    if (stop) console.log('функция остановлена');
    else
    g(true);

};

g(false);