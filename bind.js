const person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
  const logName = function() {
    console.log('Full name:', this.getFullName());
  };
  
  // Используем метод bind для привязки контекста person к функции logName
  const boundLogName = logName.bind(person);
  
  // Вызываем функцию, которая была привязана к объекту person
  boundLogName();