const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
// Создаем функцию для удаления людей из очереди, которые не получили посылку   Думал, какие парамтры задать , так и не придумал
function giveParcel() {
       let deletePerson = peopleWaiting.shift();
       return `${deletePerson} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`
}
// Потренировался с callback, чтобы посмотреть что это такое и зачем
function showAlertGive(callback){
    callback(giveParcel());
}
// Функциональное выражение для удаления людей которые не получили посылку
const leaveQueueWithoutParcel = () => {
        let deletePersonInQueue = peopleWaiting.pop();
        alert(`${deletePersonInQueue} не получил(а) посылку и ушел(ла) из очереди` ) 
}
//Цикл для того чтобы спрашивать и удалять получивших и неполучивших людей
for ( let i = 1; i = peopleWaiting.length; ){
    let confirmReceipt = confirm ('Ты получил посылку?')
    if (confirmReceipt) {
        showAlertGive(alert);
    } else if (!confirmReceipt){
        leaveQueueWithoutParcel()
    }
}

