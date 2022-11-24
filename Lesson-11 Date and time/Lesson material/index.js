//Date

const date = new Date();
console.log(date)

// new Date (year, mounth,date, hours, minutes, seconds, ms)

//0 (january) до 11 (december)

const newDate = new Date(2000, 1, 10, 11, 5, 5000);
console.log(newDate);

console.log('year', newDate.getFullYear());
console.log('year', newDate.getMonth());
console.log('year', newDate.getDate());
console.log('year', newDate.getMinutes());

//День недели
// 0 (воскресенье) - 6(суббота)

console.log('day', newDate.getDay());
if(newDate.getDay() === 4){
    console.log('Сегодня у нас четверг')
}

newDate.setFullYear(2001);
newDate.setMonth(2);
newDate.setDate(20);
console.log(newDate);


//const date = new Date('December 17, 2006 03:24:00');
// console.log(date); // Thu Dec 17 2006 03:24:00 GMT...

/* const date = new Date(Date.parse('December 17, 2006 03:24:00'));
console.log(date); // Thu Dec 17 2006 03:24:00 GMT...

Метод Date.parse() анализирует строку на наличие даты и переводит её в миллисекунды:

console.log(Date.parse('December 17, 2006 03:24:00')); // 1166307840000

*/