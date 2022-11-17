const numbers = [10, 4, 100, -5, 54, 2];

//for
let sum1 = 0
for (let i = 0; i < numbers.length; i ++){
    sum1 += numbers[i] **3 
}
console.log('sum1', sum1) 

//for...of
let sum2 = 0;
for (let sum of numbers) {
    sum2 += sum **3;
}
console.log('sum2',sum2)

//forEach()
sum3 = 0;
let sum = numbers.forEach((number) => {
    return sum3 += number **3;
})
console.log('sum3', sum3)

//reduce()

const sum4 = numbers.reduce((acc,number) => {
    return acc += number **3;
},0)
console.log('sum4', sum4);