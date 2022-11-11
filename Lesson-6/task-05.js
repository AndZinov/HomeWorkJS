//  от 0 до 100
let counter = 0;
for (i = 1; i < 101; i++){
    let sum = i + counter ;
    console.log (`${i} + ${counter}`);
    counter = sum ;
    console.log(sum);
}

// от 100 до 0
// let counter = 0;
// for (i = 100; i > 0; i--){
//     let sum = i + counter ;
//     console.log (`${i} + ${counter}`);
//     counter = sum ;
//     console.log(sum);
// }
