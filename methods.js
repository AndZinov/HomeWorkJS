// toUpperCase, toLowerCase

const animal = 'Lion';
console.log('upper', animal.toLowerCase());

console.log(animal);

//Найти символы indexOf, includes

const text = 'My lover language programming it is JavaScript';
console.log('indexOf', text.indexOf('a'));
console.log('includes', text.includes('Java'));

//Обрезка строки - slice, substring

// const programmingLanguage = 'JavaScript';
// console.log('slice', programmingLanguage.slice(3,7));
// console.log('substring', programmingLanguage.substring(1,6));

//Замена символов в строке replace, replaceAll

const programmingLanguage = 'JavaScript';
console.log('replace', programmingLanguage.replace('Script','123'));
console.log('replaceAll', programmingLanguage.replaceAll('a','A'));

//Repeat

const helloText = 'hello';
console.log(helloText.repeat(10));

//trim

const nameOfUser = prompt('What is you name?');
console.log('nameOfUser', nameOfUser.trim());
