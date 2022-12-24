//async
//await

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

//try catch  finally Схема использования

// try {

// } catch(error){
//     console.log('error', error);
// } finally {
//     console.log('finally');
// }


const getTodosWithUserData = async () => {
    try {
        const response = await fetch(USERS_URL);
        console.log(response)
        if(!response.ok){
            throw new Error('Ошибка в получении данных о пользователях')
        }
        console.log('response', response)
        const users = await response.json();
        console.log('users', users)
        const firstUserId = users[0]?.id;
        const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUserId}`)
        if(!todosResponse.ok){
            throw new Error('Ошибка в получении данных о задачах')
        }
        co
        const todos = await todosResponse.json();
        console.log('todos',todos)
    } catch(error){
        console.log('error', error);
    } finally{
        console.log('finally');
    }
};

const promis = getTodosWithUserData();
console.log(promis)

