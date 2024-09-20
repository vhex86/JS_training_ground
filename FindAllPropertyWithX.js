/** Находим все свойства начинающиеся на x */
'use strict'
const x = {
    dcsd:1,
    xxccz:2,
    xsdz:32
}


Object.keys(x)
    .filter(prop => prop.match(/^x/))
    .forEach(prop => console.log(`${prop}: ${x[prop]}`));