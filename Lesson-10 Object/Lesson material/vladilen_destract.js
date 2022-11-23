function calcValues(a,b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
};


//Деструктуризация с массивами
/*

// console.log(calcValues(42, 34))
const [sum,sub = 'Вычитания неты', mult, ...other] = calcValues(42, 34)
// const sum = result[0];
// const sub = result[1];
// const [sum, sub]= result

console.log(sum, mult, other, sub) */

//Деструктуризация с объектами

const person = { 
    name: 'Maks',
    age: 20,
    address: {
        country: 'Russia',
        city: 'Moscow'
    }
};
// const name = person.name
const {name: firstName = 'Без имени' , 
age, 
car = 'Машины нет', 
address: {city: homeTown, country}
} = person

const {name, ...info} = person;
console.log(name,info)

console.log(firstName, age, car, homeTown, country)


//Практика
// const logPerson = (per) => {
//     console.log(per.name + ' ' + per.age)
// }

const logPerson = ({name: firsName = '111', age}) => {
    console.log(firsName + ' ' + age)
}

logPerson(person)