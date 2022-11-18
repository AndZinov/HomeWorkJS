const currentDeveloper = ['Maxim', 'Oleg'];
const newDeveloper = ['Anton','Andrey'];

// concat

// //1
// const allDevelopers = currentDeveloper.concat(newDeveloper,currentDeveloper);
// console.log(allDevelopers)

//2 ...
const allDevelopers = [
    ...currentDeveloper,
    ...newDeveloper,
]
console.log(allDevelopers);

const allDevelopers = [
    'Maxim', 'Oleg',
    'Anton','Andrey'
]