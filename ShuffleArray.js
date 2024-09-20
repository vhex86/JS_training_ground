/*Перемешивания массива с помощью алгоритма Фишера-Йетса */
'use strict'
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const shuffledNumbers = shuffle(numbers);
  
  console.log(shuffledNumbers); // Выведет: [4, 2, 5, 1, 3]