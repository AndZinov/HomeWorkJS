const clientName = prompt("Введите имя клиента");
let clientSpentToday = prompt("Сколько клиент потратил сегодня?");
let clientSpentForAllTime = prompt("Сколько клиент потратил за все время?");

clientSpentForAllTime = Number(clientSpentForAllTime);
clientSpentToday = Number(clientSpentToday);

let discount = 0;

console.log(!clientSpentToday, !clientSpentForAllTime) 