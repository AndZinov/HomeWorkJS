let JavaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений';
// Получаем длину строки делим ее на два и окрагляем вниз
let middleString = Math.floor (JavaScriptDescription.length / 2);

//Обрезаем строку с первого символа по серидину строки
let cutString = JavaScriptDescription.slice(0,middleString);

// В обрезанной строке заменяем все "а" на "А"
let replaceInString = cutString.replaceAll('а','А').replaceAll('a','A');

// Удаляем все пробелы в строке.
let withoutSpace = replaceInString.trim().replaceAll(' ', '')

//Дублирую
console.log(withoutSpace.repeat(3))

console.log(JavaScriptDescription[middleString]);

