const myName = "Andrey";
let programmingLanguage = 'JavaScript';
const courseCreatorName = 'Vladilen Minin';
let reasonText = 'It is interesting for me';
let numberOfMonth = '2 mounths';

let myInfoText = `${'Всем привет! Меня зовут'} ${myName}${'. Сейчас я изучаю язык программирования'} ${programmingLanguage} ${'на курсе по'} 
${programmingLanguage} ${'у'} ${courseCreatorName}${'. Я хочу стать веб-разрабочиком, потому что '}${reasonText}${'.'}
${'До этого я изучал'} ${programmingLanguage} ${numberOfMonth}${'. Я уверен, что пройду данный курс до конца!'}`;

// console.log('replaceAll ', myInfoText.replaceAll('JavaScript','javascript'));
//1
myInfoText = myInfoText.replaceAll('JavaScript','javascript');
//2
myInfoText = myInfoText.replaceAll('курс', 'КУРС');
//3
console.log(myInfoText);
//4
console.log(myInfoText.length);
//5
console.log(myInfoText[0], myInfoText[272]);
