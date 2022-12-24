//Давайте начинать
//Я в промисе
//Давай end
//Возвращаю результат из промиса
//Привет, я сет таймаут
//Я тоже в сет таймаут, только жду подольше



// console.log('Давайте начинать'); //1 

// setTimeout(() => {
//     console.log('Привет, я сет таймаут');; // 5
// },1000)

// const promise = new Promise((resolve) => {
//     console.log('Я в промисе'); // 2
//     resolve('Возвращаю результат из промиса') //4
// })

// setTimeout(() => {
//     console.log('Я тоже в сет таймаут, только жду подольше');; // 6
// },2000)

// promise.then((result) => {
//     console.log(result); // 4
// })

// console.log('Давай end'); // 3


//Микрозадачи это then , catch , finally


// Порядок выполнения:
// 1. Выполнение мАкрозадачи (Это все что в синхронном коде от 1 строки до последней)
// 2. Вызывть все, что есть в очереди мИкрозадач
// 3. Вызывается все что есть в очереди вызовов callback queue

const getData = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((user) => {
        console.log('Success');
        callback(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getData(() => {
    console.log('user received');
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('promise resolved');
      }, 500);
      console.log('in promise');
      setTimeout(() => {
        console.log('last set timeout');
      }, 400);
   });
   promise.then((result) => {
     console.log(result);
    });
  });
  console.log('End')