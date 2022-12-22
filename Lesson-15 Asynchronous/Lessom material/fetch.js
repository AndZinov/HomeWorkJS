//fetch 
// fetch(url);


// GET, POST, DELETE

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

// const result = fetch(TODOS_URL, {
//     method: 'GET'
// })
// console.log(result)

// result
//     .then((response) => {
//         return response.json()
//     })
//     .then((todos) => {
//         console.log('todos', todos);
//     })
//     .catch((error) => {
//         console.log('error', error);
//     })

//Для ошибки
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const createTodoElement = (text) => {
    const todoElement = document.createElement('li');
    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href = '#';
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);

    return todoElement
}

const toggleLoader = () => {
    const loadeerHTML = document.querySelector('#loader');
    const isHidden = loadeerHTML.hasAttribute('hidden')
    if (isHidden) {
        loadeerHTML.removeAttribute('hidden');
    } else {
        loadeerHTML.setAttribute('hidden', '');
    }
}

const dataContainer = document.querySelector('#data-container');


const getAllTodos = () => {
    toggleLoader();
    const result = fetch(TODOS_URL, {
        method: 'GET',
    })
    console.log(result)

    result
        .then((response) => {
            console.log('response',response)
            if(!response.ok){
                throw new Error('Ошибка запроса')
            }
            return response.json();
        })
        .then((todos) => {
            console.log('todos',todos)
            todos.forEach((todo) => {
                const todoHTML = createTodoElement(todo.title);
                dataContainer.append(todoHTML);
            })
        })
        .catch((error) => {
            console.log('error', error);
        })
        .finally(() => {
            toggleLoader();
        })
}

getAllTodos();


/*

function outputTable(users) {
  const table = document.createElement("table");

  for (const user of users) {
    const row = table.insertRow();

    const column1 = row.insertCell();
    column1.innerHTML = `<img class="avatar" src="${user.avatar_url}" />`;

    const column2 = row.insertCell();
    column2.innerHTML = `<a href="${user.html_url}">${user.login}</a>`;
  }

  document.body.append(table);
}


fetch("https://api.github.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    return response.json();
  })
  .then((data) => {
    outputTable(data);
  })
  .catch((error) => {
    console.log(error);
  });
  .finally(() => {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  });
*/