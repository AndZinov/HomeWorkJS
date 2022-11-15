const getSumOfNumbers = function (number, type) {
    
    // Проверяем число ли это, а после считаем сумму до указаного числа и передаем в переменную sum
    let sum = 0;
    if (!number){
        return Number(number)
    // Если нечетное, тогда проверяем делится ли на два, если да, то пропускаем, если нет то складываем
    } else if (type === 'odd') {
        for (i = 0; i <= number; i++){
            if (i / 2 === Math.floor(i / 2) ){
                continue
            }
            sum += i;
        }
    //Если четное, тогда проверяем делится ли на два , если да, то складываем. если нет , то пропускаем 
    } else if (type === 'even') {
        for (i = 0; i <= number; i++){
            if (i / 2 === Math.floor(i / 2) ){
                sum += i;
            }
            continue;
        }
    // Если пустая строка, то складываем все числа 
    } else if (type === ''){
        for (i = 0; i <= number; i++){
                sum += i;
            }       
    }
    // Возвращаем сумму 
    return sum;
}
let enterUserNumber = prompt('Введите число, сумму которого хотите посчитать')
enterUserNumber = Number(enterUserNumber);

console.log(getSumOfNumbers(enterUserNumber, "odd"));
console.log(getSumOfNumbers(10, "even"));
console.log(getSumOfNumbers(10, "")); 