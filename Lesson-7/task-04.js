let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i] ** 3; //debugger через точку и Node, увидел, что код меняет массив
    // sum += numbers[i]; //debugger 
} 
console.log(sum); // 1158411

// Через цикл for of
sum = 0;
for (let num of numbers){
    num = num ** 3; //debugger через точку и Node, увидел, что при исходном коде используется измененный массив
    sum += num;//debugger 
} 
console.log(sum); // 1003904306910622800