// && (И)
// || (ИЛИ)
// ! (НЕ)
// ??

const userAge =15;
if( userAge > 5 &&  userAge <= 18 ){
    console.log('User go in school')
}

const programmingLanguage = 'JavaScript';
const experienceInYear = 2;

if (programmingLanguage === 'JavaScript' && experienceInYear > 1){
    console.log('You are welcome');   
}

// || (ИЛИ)

const currentHourse = 10;
if ( currentHourse < 8 || currentHourse > 20){
    console.log ('Our office close. Come here tomorrowe')
} else {
    console.log('You are welocme in office')
}

const userNikname = null;
const defaultNickname = 'User';
const nickName = userNikname || defaultNickname || 'noname'; // User
console. log('nickname', nickName);


const finalNickname = userNikname && 'User have'; // User have

console.log ('nickname', nickName);
console.log('finalNickname', finalNickname);

// ! (НЕ)

const hasAccess = true;
console.log('hasAccess', !hasAccess)
if (!hasAccess){
    console.log('access close');
} else {
    console.log('access open');
}

const answer = prompt ('How are you old?');
if (!answer){
    alert ('Enter full you old'); //!'' true
} else {
    alert (`You ${answer} old`); // !'1234' false
}

//Оператор объединения с null ??

//false, 0, '' , NaN, underfined, null ложные значения
console.log(false || 'Hello World'); // Hello World

// null, undefined - ложные значения
console.log(false ?? 'Hello World'); // false

//Если в выражении с использованием логического оператора ИЛИ (||) все операнды приводятся к false (все являются falsy-значениями), то вернется последнее значение:

console.log('' || 0 || false); // false
console.log(false || 0 || ''); // ''

//Если будет больше одного значения, которое приводится к true (являются truthy-значеними), то вернется первое из них:

console.log(false || 'hello' || true); // 'hello'
console.log(1 || false || 'javascript'); // 1
console.log(true || 1 || 'javascript'); // true

//C оператором И (&&) наоборот. Если все операнды приводятся к true , то вернется последнее значение:

console.log(1 && 'hello' && true); // true
console.log(true && 1 && 'javascript'); // 'javascript'

//Если будет больше одного значения, которое приводится к false , то вернется первое из них:

console.log(false && 0 && 'javascript'); // false
console.log(1 && '' && false); // ''
console.log(0 && '' && false); // 0
