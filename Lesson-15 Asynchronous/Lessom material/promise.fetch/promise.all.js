// Promise.all([
//     new Promise(),
//     new Promise(),
//     new Promise(),
// ])

//fulfilled - вернет это значение если все промисы будут выполнены успешно 
//rejected - если хотя бы один rejected 

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const todoIds = [43, 10, 5, 100, 101]

const createTodoElement = (text) => {
    const todoElement = document.createElement('li');
    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href = '#';
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);

    return todoElement
}

const dataConteiner = document.querySelector('#data-container')

const getTodosByIds = (ids) => {
    const request = ids.map((id) => fetch (`${TODOS_URL}/${id}`))
    console.log('request',request)
    Promise.all(request)
        .then((responses) => {
            const dataResults = responses.map((response) => response.json());
            console.log('dataResults', dataResults)
            return Promise.all(dataResults);
        })
        .then((todos) => {
            console.log('todos', todos);
            todos.forEach((todo) => {
                const todoHTML = createTodoElement(todo.title)
                dataConteiner.append(todoHTML)
            })
            
        })
        .catch((error) => {
            console.log(error);
        })
};

getTodosByIds(todoIds)