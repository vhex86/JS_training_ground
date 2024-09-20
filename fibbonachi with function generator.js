'use strict';
function* fibonacci() {
    let a = 0, b = 1;
    
    while (true) {
        yield a; // Возвращаем текущее значение
        [a, b] = [b, a + b]; // Обновляем значения
    }
}

const fib = fibonacci();

console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5
