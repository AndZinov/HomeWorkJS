const clientsEstimations = [];
//Функция для запроса оценки кофейни и добавление оценок в массив
const askClientToGiveEstimation = () =>{
    let askResult = prompt('How do you evaluate our coffee shop from 1 to 10?');
    askResult = Number(askResult);
    if (askResult > 0 && askResult < 11){
        return clientsEstimations.push(askResult);
    }
}
//Цикл для запрашивания оценок
for (let i = 0; i < 5 ; i ++) {
    askClientToGiveEstimation();
}
//Фильтруем все оценки, которые больше 5
const goodEstimations = clientsEstimations.filter((evalu) => {
    return evalu > 5 
 })
// Фильтруем все оценки меньше или равные 5
const badEstimations = clientsEstimations.filter((evalu) => {
    return evalu <= 5; 
 })
//Выводим итоговые результаты
alert(`All good estimation: ${goodEstimations.length}; All bad estimation: ${badEstimations.length}`)

