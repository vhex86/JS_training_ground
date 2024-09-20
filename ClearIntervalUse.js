// Функция, которая будет вызываться через определенные промежутки времени
function sayHello() {
    console.log('Hello!');
}

// Устанавливаем интервал повторения функции sayHello каждые 2 секунды
let intervalId = setInterval(sayHello, 2000);

// Через 10 секунд останавливаем повторение функции
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped');
}, 10000);