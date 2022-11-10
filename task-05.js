let userString = prompt('Sent you massage for cut');
let startSliceIndex = prompt('Enter the index from which you need to start slice the string');
let endSliceIndex = prompt('Enter the index from which you need to end slice the string');
//Убираем пробелы в введенном сообщении 
userString = userString.trim();
//Меняем тип введенных данных на число, чтобы использовать его в slice
let startNumber = Number(startSliceIndex);
let endNumber = Number(endSliceIndex);
//Обрезаем сообщение 
let cutString = userString.slice(startNumber,endNumber);
const youResult = alert(`${'Result:'} ${cutString}`)
