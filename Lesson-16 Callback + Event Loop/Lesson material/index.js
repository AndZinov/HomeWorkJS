//Callback

setTimeout(() => {}, 3000);

const FIRST_TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1';
const getTodo = (callback) => {
    fetch(FIRST_TODO_URL)
        .then((response) => response.json())
        .then((todo) => {
            console.log('todo', todo);
            callback(todo)
        })
        .catch((error) => {
            console.log(error)
        })

};

getTodo((todoItem) => {
    console.log('todoItem', todoItem)
});

// Чтобы код не рос вправо вместо :

/* 
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        console.log('Hello World!')
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)
*/


const wait = (ms) => 
  new Promise((resolve) => setTimeout(resolve, ms));

wait(1000)
  .then(() => wait(1000))
  .then(() => wait(1000))
  .then(() => wait(1000))
  .then(() => console.log('Hello World!'));