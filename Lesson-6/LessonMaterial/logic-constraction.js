// if 
//if else
// swith case
// ? :

const ifFrontEndDeveloper = false ;

if (ifFrontEndDeveloper){
    console.log('You Front-End developer. You are welcome')
} else {
    console.log('You dont Front-End developer');
}

const closingTime = 8;
const currentTime = 9;

if( currentTime > closingTime){
    console.log('Store close');
} else {
    console.log('Store open. Come to purchase')
}


const developerJobType = 'Back-End';

if(developerJobType === 'Front-End') {
    console.log('2000$');
} else if (developerJobType === 'Back-End') {
    console.log('1500$');
} else if (developerJobType === 'Full-Stack') {
    console.log('3500$');
} else {
    console.log('Salary undefined')
}

// swithc case

switch(developerJobType){
    case 'Front-End':
        console.log('2000$');
        break;
    case 'Back-End':
        console.log('1500$')
        break;
    case 'Full-Stack':
        console.log('3500$')
        break;
    default:
        console.log('Salary undefined')
}

// ?: замена if else
// const favoriteDrink = 'Coffee';
// let massage = '';
// if (favoriteDrink === 'Coffee'){
//     massage = 'You favorit drink - this coffee';
// } else {
//     massage = 'Abviosly you like tea';
// }
// console.log('massage', massage)
const favoriteDrink = 'Coffee';
const massage = favoriteDrink === 'Coffees' 
? 'You favorit drink - this coffee'
: 'Abviosly you like tea';
console.log('massage', massage)
