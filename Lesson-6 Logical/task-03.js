// Выполнил это задание, как тест с вариантом ответов да или нет
// Задаем переменные для ответов, так как confirm возвращает boolean значение, то задаем через тру и фолс
let answer1 = true;
let answer2 = true;
let answer3 = false;

// Проводим тест
const question1 = confirm('JavaScript появился в 1995 году?');
question1 === answer1 ? alert('Right') : alert ('Right answer: Yes')
const question2 =  confirm('Спецификация JavaScript называется ECMAScript?');
question2 === answer2 ? alert('Right') : alert ('Right answer: Yes')
const question3 = confirm('JavaScript был создан за 1 месяц?');
question3 === answer3 ? alert('Right') : alert ('Right answer: No')
