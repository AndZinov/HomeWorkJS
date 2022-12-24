const developer = {
    name: 'Andrey',
    isJSDev: true
}

// setTimeout(() => {
//     console.log('SetTimeout')
// }, 3000)


// console.log(developer);

// setInterval(() => {
//     console.log('setInterval')
// }, 1000)

//Три статуса
// panding - ожидание
//fulfiled - выполнен
//rejected - ошибка

const promise = new Promise((resolve, reject) => {
    if(developer.isJSDev){
        setTimeout(() => {
            resolve(`${developer.name} является js разработчиков`);
        }, 3000)
    } else {
        reject(`${developer.name} не является js разработчиком`)
    }
});

console.log(promise)

//then , catch, finally

promise
    .then((succesMassage) => {
      console.log('succesMassage', succesMassage)  
    })
    .catch((error) =>{
        console.log(error)
    })
    .finally(() => {
        console.log('finally')
    })