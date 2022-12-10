const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];
console.log(tasks)
const tasksList = document.querySelector('.tasks-list');

//Функция для создания шаблона 
const createNewHTML = (object) => {
    function createElements (fn) {
        return document.createElement(fn)
    }
    const taskItem = createElements('div');
    taskItem.classList = 'task-item';
    taskItem.dataset.taskId = `${object.id}`;

    const mainContainer = createElements('div');
    mainContainer.classList = 'task-item__main-container';
    taskItem.prepend(mainContainer);

    const mainContent = createElements('div');
    mainContent.classList = 'task-item__main-content';
    mainContainer.prepend(mainContent)

    const form = createElements('form');
    form.classList = 'checkbox-form'
    mainContent.prepend(form)

    const input = createElements('input');
    input.classList = 'checkbox-form__checkbox'
    input.type = 'checkbox';
    input.id = `${object.id}`;
    form.prepend(input);

    const label = createElements('label');
    label.htmlFor = `${object.id}`;
    form.append(label);

    const span = createElements('span');
    span.classList = 'task-item__text';
    span.textContent = `${object.text}`;
    mainContent.append(span);

    const button = createElements('button');
    button.classList = 'task-item__delete-button default-button delete-button'
    button.dataset.deleteTaskId = `${object.id}`
    button.textContent = 'Удалить'
    mainContainer.append(button)


    return taskItem
}
// Цикл для создания всех абзацев
tasks.forEach(object => {
    const newForattend = createNewHTML(object)
    return tasksList.append(newForattend)
}) 


console.log(tasksList)


const createTaskForm = document.querySelector('.create-task-block')

createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const {target} = event;
    const inputValue = target.taskName.value
    pushObjectWithUniqueCod(tasks,inputValue)
    const newForattend1 = createNewHTML(tasks[tasks.length-1])
    return tasksList.append(newForattend1)
})

function pushObjectWithUniqueCod (object, value) {
    const uniqId = Date.now().toString() //Создаем уникальный ID
    const testObject = {
        id: uniqId,
        completed: false,
        text: value
    }
    return object.push(testObject)
}

console.log(document.querySelector('body'))


/* Пытался написать код для удаления по кнопке, решил оставить на потом 
const allDeleteButton = document.querySelectorAll('.task-item__delete-button')
allDeleteButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        const idButton = button.dataset.deleteTaskId;
        tasks.forEach(({id}, index) => {
            if(id === idButton){
                
            }
        })
    
    })
})

const indexTest = tasks[1].id
const testNow = tasks.filter((object) => {
    object.id !== '1138465078061'
})
console.log(testNow)*/