// string | symbol

const id = Symbol('id');

const user = {
    [id]: 1,
    // [Symbol('id')]: 1,
    // [Symbol('id')]: 2,
    // [Symbol('id')]: 3,
    name: 'Andrey',
    name: 'Igor',
    10: '1234',
    undefined: undefined,
    [false]: false,
};
console.log('user', user)

console.log(Object.keys(user))

//Чтобы обращаться к свойству напрямую, нужно присвоить символ отдельной переменной:

console.log(user[id])

// in 

console.log('name' in user);
console.log('language' in user);
console.log(id in user)


//Для получения всех символьных ключей объекта использовать Object.getOwnPropertySymbols():
const car = {
    [Symbol("name")]: "Toyota Corolla",
    [Symbol("name")]: "Nissan Note"
  };
  
  const symbols = Object.getOwnPropertySymbols(car);
  for (const symbol of symbols) {
    console.log(`${symbol.description} - ${car[symbol]}`);
  }
  // Цикл выведет:
  // name - Toyota Corolla
  // name - Nissan Note