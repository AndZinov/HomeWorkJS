let userText = prompt('Enter text');
let wordFromText = prompt('Enter worl from text');
//Убираем лишние пробелы спереди и сзади
userText = userText.trim();
wordFromText = wordFromText.trim();
//Находим индекс слова, которое введ пользователь
let indexOfWord =  userText.indexOf(wordFromText);
// Обрезаем строку 
let cutString = userText.slice(0, indexOfWord);
let youResult = alert(`${'Result: '} ${cutString}`);
