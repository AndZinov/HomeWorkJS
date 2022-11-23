const ordersArr = [4, 2, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];

const giveTalonsInOrder = (patient, orders) => {
    //Создаем массив
    const orderOnNumber = [];
    //Перебираем массив внутри другого массива и проверяем на условие
    orders.forEach((number) => {
        patient.forEach((object) => {
            if (object.id === number){
                orderOnNumber.push(object)
             }
        });
    });
    return orderOnNumber;
}
const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);