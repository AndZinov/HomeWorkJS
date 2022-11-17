const salaryOfDevelopers = [400, 500, 600, 2000, 350];

// Добавление элемента push  unshift
const newSeniorDeveloperSalary = 5000;
salaryOfDevelopers.push(newSeniorDeveloperSalary); //добавление в конец массива
console.log(salaryOfDevelopers);

salaryOfDevelopers.unshift(100, 102, 103, 104); // добавление в начало массива
console.log( salaryOfDevelopers) 

//Удаление элементов shift pop

const firstRemovedElement = salaryOfDevelopers.shift(); //Удаление из начала массива
console.log(firstRemovedElement)
salaryOfDevelopers.shift();

const lastRemovedElement = salaryOfDevelopers.pop(); //Метод pop() удаляет последний элемент массива:
console.log(lastRemovedElement);
console.log(salaryOfDevelopers);

//Изменение элементов

salaryOfDevelopers[4] = 6000;
console.log(salaryOfDevelopers)