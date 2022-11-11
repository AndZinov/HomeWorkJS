//Операторы сравнения > < >= <= == ===

console.log(5 > 10); //false
console.log(5 < 10); //true

console.log(5 <= 5); //true
console.log(5 >= 6); //false

console.log('==', 100==100)//true

//Сравнение строк

console.log ('JavaScript' == 'Javascript') //false
console.log('S', 'S'.charCodeAt());//83
console.log('s', 's'.charCodeAt());//115
console.log ('JavaScript' > 'Javascript') //false
console.log ('JavaScript' < 'Javascript') //true

console.log ('javaScript' > 'JavaScript'); //true
console.log('j', 'j'.charCodeAt()); //106
console.log('J', 'J'.charCodeAt()); //74

/* Также можно в обратную сторону получить
 символ из числа при помощи метода String.fromCharCode()*/

 console.log(String.fromCharCode(97)) // 'a'
console.log(String.fromCharCode(65)) // 'A'

// == vs ===

// == сравнивает значения
// === сравнивает типы

console.log('1' == 1); //true
console.log('1' >= 1); //true
console.log('200' > '21'); //false
console.log(true == 1); //true
console.log(false  == 0); //true

// ====

console.log('1' === 1); //false
console.log(true === 1); //false

// != неравенство, противоположное нестрогому сравнению (==)
console.log(5 != 6); // true
console.log(5 != '5'); // false
console.log(5 != 5); // false
console.log(1 != true); // false
console.log(true != true); // false


// !== строгое неравенство, противоположное строгому равенству ===
console.log(5 !== 6); // true
console.log(5 !== '5'); // true
console.log(5 !== 5); // false
console.log(1 !== true); // true
console.log(true !== true); // false
console.log(false !== ''); // true
console.log(null !== undefined) // true

//Math

console.log(Math.PI) // 3.141592653589793

//Math.floor() – округление вниз
console.log(Math.floor(41.5)) // 41
console.log(Math.floor(41.9)) // 41

//Math.round() – простое округление
console.log(Math.round(41.5)) // 42
console.log(Math.round(41.4)) // 41
console.log(Math.round(41.8)) // 42
console.log(Math.round(42)) // 42

//Math.ceil() – округление вверх
console.log(Math.ceil(41.5)) // 42
console.log(Math.ceil(41.1)) // 42
console.log(Math.ceil(42)) // 42

//Convertor

const rate = 51; // Здесь указываем ваш курс USD/RUB
const amount = 100; // Здесь указываем количество рублей

const result = Number((amount / rate).toFixed(2)); // Метод toFixed() с аргументом 2 форматирует число, обрезав значение после второго символа в дробной части. 
console.log(`${amount}₽ = $${result}`); // 100₽ = $1.96