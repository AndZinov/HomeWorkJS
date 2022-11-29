const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2040',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2041',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2039',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2010',
    },
  ];
//Функция для перевода даты из РФ формата в JS
const makeRightDate = (string) => {
    return string.split('.').reverse().join('.');
    // arrayDate[1] = Number(arrayDate[1] - 1);
    // return arrayDate.join('.');  -писал такой код, чтобы он правильн оопределял месяц,
    //но в итоге он его определял неправильно почему так?
}
const allowVisa = (clients) => {
    const rightClient = clients.filter(({criminalRecord,passportExpiration}) => {
        // console.log(passportExpiration)
        const date = new Date(makeRightDate(passportExpiration))
        // console.log(date)
        return date.getTime() > Date.now() && !criminalRecord
    });
    return rightClient
};

const result = allowVisa(peopleWithVisa);
console.log('result', result);

/* Решение от школы :

const allowVisa = (people) => {
  return people.filter((person) => {
    const splittedExpirationDate = person.passportExpiration.split(".");
    const year = splittedExpirationDate.at(-1); // Возвращает последний элемент массива
    const month = splittedExpirationDate[1];
    const date = splittedExpirationDate[0];
    const passportExpirationDate = new Date(year, month - 1, date);
    return (
      passportExpirationDate.getTime() > Date.now() && !person.criminalRecord
    );
  });
};

console.log(allowVisa(peopleWithVisa));
*/


