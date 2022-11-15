function getDivisorsCount (number){
    // Переводим в числовое значение 
    number = Number(number);
    let sumDivisors = 0;
    //Проверяем введено ли число
    if (!number){
        return Number(number)
    // Проверяем введено ли целое число и больше нуля
    } else if (!Number.isInteger(number)){
        return alert(`${number} must be integer and more zero`)
    }
    //Считаем сколько раз можем поделить без остатка 
    for (i = 1; i <= number; i++){
        if ((number % i === 0 )){
            sumDivisors ++;
        } 
        continue
    }

    return sumDivisors
}
console.log(getDivisorsCount(12));