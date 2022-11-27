const todaysWinner = {
    prize: '10 000$',
 }
  
const winnerApplicants = {
    '001': {
       name: 'Максим',
       age: 25,
    },
    '201': {
       name: 'Светлана',
       age: 20,
    },
    '304': {
       name: 'Екатерина',
       age: 35,
    },
 }

//Функция для получения ключей
const getObjectKey = object => Object.keys(object);

const getWinner = (aplicants, winnerObject) => {
    //Получаем количество участников, через длину массива с ключами объекта
    const getAplicants = getObjectKey(aplicants);
    //Генерируем рандомное число исходя из длины
    const randomNumber = getRandomNumberInRange(0, getAplicants.length);
    //Узнаем победителя
    const keyWinner = getAplicants[randomNumber];
    const {prize} = winnerObject;
    const {[keyWinner]: {name, age}} = aplicants;
    //Выводим массив
    return {
        prize,
        name,
        age,
    };
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
 }

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner); 
