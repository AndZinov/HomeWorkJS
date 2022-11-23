const developerInfo = {
    age:25,
    experience: 3,
    name: 'Igor'
};


const developerEctraInfo = {
    height: 180,
    isJunior: false,
    name: 'Andrey'
};


// ...  рекомендуется использоваться
// const array = {
//         ...array1,
//         ...array2
// }


const developer = {
    ...developerInfo,
    ...developerEctraInfo,
    name: 'Nasty'

};

console.log('developer', developer) // developer {age: 25, experience: 3, name: 'Andrey', height: 180, isJunior: false}

// 2 Objiect.assign

const developer2 = Object.assign(developerEctraInfo,developerInfo);
console.log('developer2', developer2)

/* Для добавление свойств в однин из объектов

const car = {
  name: "Toyota Corolla",
  year: 2017
};

const carOwner = {
  ownerName: "Ivan Ivanov",
  ownerAge: 27
};

Object.assign(car, carOwner);

console.log(car);
/*
{
  name: 'Toyota Corolla', 
  year: 2017, 
  ownerName: 'Ivan Ivanov',
  ownerAge: 27
}
*/
