const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж'];

//Spread

// console.log(...citiesEurope)

//const allCities = [...citiesRussia, 'Вашингтон', ...citiesEurope]

const citiesRussiaPopulation = {
    Moscow : 20,
    SaintPetersburg: 8,
    Kazan: 5,
    Paris: 2,
};

const citiesEuropePopulation = {
    Berlin: 10,
    Praha: 3,
    Paris:2
}

// console.log({...citiesRussiaPopulation});
// console.log({...citiesRussiaPopulation, ...citiesEuropePopulation});


//Practice
// const numbers = [5, 17, 37,42]
//  console.log(Math.max(values: 5, 17, 37,42));
//  console.log(Math.max(...numbers));

// const divs = document.querySelectorAll(selectors: 'div');
// const nodes = [...divs]
// console.log(divs)
// console.log(nodes)

//Rest

function sum (a, b, ...rest) {
    return a + b +rest.reduce((a, i) => a + i, 0)
};

const numbers = [1, 2, 3, 4, 5, 7 , 8 , 9];
console.log(sum(...numbers))

// const a = numbers[0];
// const b = numbers[1];

// const [a,b, ...other] = numbers;

// console.log(a, b, other);

const person = {
    name: 'Max',
    age: 20,
    city: 'Moscow',
    country: ' Russia'
}
const {name, age, ...address} = person;
console.log( name, age, address);