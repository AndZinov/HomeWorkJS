const coffees = ['Latte', 'Cappuccino', 'Americano'];
let coffeeName = prompt ('Search coffee at name');
// Переводим в нижний регистр, для регистронезависимости
coffeeName = coffeeName.toLowerCase();  
// Находим индекс выбранного кофе
const searchedIndex = coffees.findIndex((coffee) => {
    return coffee.toLowerCase() === coffeeName;
})
// Функция для вывода ответа по найденому кофе
const choosedCoffee = indexUserChoose => {
    if (indexUserChoose >= 0){
        alert (`Get your favorite coffee ${coffees[searchedIndex]}. It ${searchedIndex+1}st by popular in our coffee shop`);
    } else {
        alert (`Unfortunately, don't have this kind coffee`);
    }
}
// Запускаем функцию
const alertOurConsumer = choosedCoffee(searchedIndex);