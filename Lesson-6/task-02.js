//Исходные данные
const question1 = 'Сколько будет 2 + 2?'
const answer1 = 4;
const question2 = 'Сколько будет 2 * 2'
const answer2 = 4;
const question3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
const answer3 = 1;
const question4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'
const answer4 = 12;
const question5 = 'Сколько будет 2 + 2 * 2?'
const answer5 = 6;

//  Задаем переменные для подстчета правильных и неправильных ответов
let correctAnswer = 0;
let incorrectAsnwer = 0;

// Проводим тест и записываем правильные и неправильные ответы в переменные подстчета
let userAnswer1 = prompt(question1);
userAnswer1 = Number(userAnswer1);
if (userAnswer1 === answer1){
    alert('Answer Right')
    correctAnswer ++;
} else {
    alert ('Answer incorrect')
    incorrectAsnwer ++;
}
let userAnswer2 = prompt(question2);
userAnswer2 = Number(userAnswer2); 
if (userAnswer2 === answer2){
    alert('Answer Right')
    correctAnswer ++;
} else {
    alert ('Answer incorrect')
    incorrectAsnwer ++;
}
let userAnswer3 = prompt(question3);
userAnswer3 = Number(userAnswer3); 
if (userAnswer3 === answer3){
    alert('Answer Right')
    correctAnswer ++;
} else {
    alert ('Answer incorrect')
    incorrectAsnwer ++;
}
let userAnswer4 = prompt(question4);
userAnswer4 = Number(userAnswer4); 
if (userAnswer4 === answer4){
    alert('Answer Right')
    correctAnswer ++;
} else {
    alert ('Answer incorrect')
    incorrectAsnwer ++;
}
let userAnswer5 = prompt(question5);
userAnswer5 = Number(userAnswer5);
if (userAnswer5 === answer5){
    alert('Answer Right')
    correctAnswer ++;
} else {
    alert ('Answer incorrect')
    incorrectAsnwer ++;
}

// Делаем сравнение правильных ответов и выдаем оценку
correctAnswer >= 3 ? alert(`End Test! Right answer ${correctAnswer}; Worse answer ${incorrectAsnwer};  You mark is ${correctAnswer}, congralations!`) : alert(`End test! Right answer ${correctAnswer}; Worse answer ${incorrectAsnwer}; You mark is 2, go study!`);