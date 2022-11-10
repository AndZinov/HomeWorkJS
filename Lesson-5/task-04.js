// let userAnswer = prompt('What is you name?');
// userAnswer = userAnswer.toUpperCase(); 
// userAnswer = userAnswer.trim();
// alert (`${'You name '}${userAnswer}`);
//Второй вариант решения, Саша, напиши в комментариях какой предпочтительней
//const userAnswer = prompt('What is you name?');
//const ourAnswer = alert(`${'You name '}${userAnswer.toUpperCase(), userAnswer.trim()}`);

const userAnswer = prompt('What is you name?');
const userAge = prompt('How are you old?');

// Upper and trim for name
let nameOfUser = userAnswer.toUpperCase();
nameOfUser = nameOfUser.trim();
//Number and trim for age
let ageUser = userAge.trim();
ageUser = Number(ageUser)

let aboutYou = alert(`${'You name '}${nameOfUser} ${'and you'} ${ageUser} ${'old'}`)