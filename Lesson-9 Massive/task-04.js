const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
//Обновляем цену на кофе
const updatedPrice = prices.map (coffe => coffe + 0.5);
//Уведомляем об изменении цены каждого кофе
const alerCustomer = coffees.forEach((coffee,index) => {
    alert (`Coffee ${coffee} now cost ${updatedPrice[index]} euro`)
})
