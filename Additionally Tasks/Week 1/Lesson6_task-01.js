// Данные о клиенте
const clientName = 'Igor';
let clientSpentForAllTimee = 110;
let clientSpentToday = 25;
let discount = 0;

//Проверяем какая скидка у клиента на основании потраченного за все время
if (clientSpentForAllTimee < 100){
    discount = 0;
} else if (clientSpentForAllTimee >=100 && clientSpentForAllTimee < 300){
    discount = 10;
} else if (clientSpentForAllTimee >= 300 && clientSpentForAllTimee <= 500){
    discount = 20;
} else {
    discount = 30;
}
//Выводим скидку
alert(`You discount ${discount}%!`);
// Потраченое добавляем к общему количеству
clientSpentForAllTimee += clientSpentToday;
// Проверяем есть ли скидка и добавляем ее
if (discount > 0){
    clientSpentToday -= clientSpentToday *= discount / 100;
} 
//Выводим итог
alert(`Thank you ${clientName}! To paing ${clientSpentToday}$. You spent for all time in our restorant ${clientSpentForAllTimee}$`);
