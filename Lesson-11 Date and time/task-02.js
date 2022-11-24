const myNextBirthDay = new Date(2023,7,9)
//Функция для перевода мс в дни
const convertMsToDays = date => Math.round(date.getTime() / 3600000 / 24);
//Вычитаем от текущей даты до дня рождения
const getDaysBeforeBirthday = (nextBirthdayDay) => {
    return convertMsToDays(nextBirthdayDay) - convertMsToDays(new Date())
};

console.log(getDaysBeforeBirthday(myNextBirthDay))