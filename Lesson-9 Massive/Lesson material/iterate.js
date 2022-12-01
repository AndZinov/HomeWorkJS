// const developerNames = ['Кристина', 'Олег', 'Кирилл', 'Мария'];

//for
// for(начальное значение; условие; шаг ){

// }

/*console.log(developerNames[1]);

for (let i = 0; i < developerNames.length; i ++){
    console.log(i)
    console.log('item', developerNames[i])
}*/

// for of

/*for (const name of developerNames){
    console.log(name)
} */

// forEach Рекомендованный
/*array.forEach((элемент, индекс, массив) => {
    // тело функции
  })*/

// developerNames.forEach((name, index, array) => {
//     console.log(name);
//     console.log(index);
//     console.log(array)
// });
// // developerNames.forEach(function () {})


// MAP  для изменения массива

const salaryOfDevelopers = [400, 500, 600, 2000, 350];

const updatedSalaries = salaryOfDevelopers.map((salary, index, array) => {
    return salary ** 2;
})

console.log(updatedSalaries)

// filter

const filterSalaries = salaryOfDevelopers.filter ((salary,index,array) => {
    // return salary > 500;
    return index % 2 === 0;
    
})
console.log(filterSalaries)

//find

const searchSaalary = salaryOfDevelopers.find((salary) => {
    // return salary === 500;
    return salary > 400 // 500 выводит первое найденное число
})

console.log(searchSaalary)

// findIndex

const searchedIndex = salaryOfDevelopers.findIndex((salary) => {
        return salary === 400;
})

console.log(searchedIndex)

//some, every true or false

const elementExists = salaryOfDevelopers.some((salary) => {
    return salary > 3000; //Если хотя бы один элемент true выводит true
})

console.log(elementExists)

const allElementExists = salaryOfDevelopers.every((salary) => {
    return salary > 0; //Все элементы должны удовлетворять условию, тогда будет true
})

console.log(allElementExists)

//reduce


//const salaryOfDevelopers = [400, 500, 600, 2000, 350];


const sum = salaryOfDevelopers.reduce((acc, salary, index, array) => {
    console.log('acc/salary', acc, salary)
    return acc + salary;
},0);

console.log('Reduce',sum)


//sort 
// < 0
// > 0
// 0

salaryOfDevelopers.sort((a,b) =>{
    return b - a;
});
console.log(salaryOfDevelopers)

//Если не задавать callback то переводит из числа в строку и сортирует строку по возрастанию

400
'400'

salaryOfDevelopers.sort();
console.log(salaryOfDevelopers)

const developerNames = ['Кристина', 'Олег', 'Кирилл', 'Мария'];
developerNames.sort((a,b) => {
    if(a > b){
        return 1;
    }
    if(a < b){
        return -1;
    }
    return 0;
});
console.log(developerNames)