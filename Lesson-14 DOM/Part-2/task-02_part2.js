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
const tasksList = document.querySelector('.tasks-list');

function createElements (fn) {
    return document.createElement(fn)
}

//Функция для создания шаблона 
const createNewHTML = (object) => {
    
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
// Цикл для создания всех абзацев из массива
tasks.forEach(object => {
    const newForattend = createNewHTML(object)
    return tasksList.append(newForattend)
}) 
//Функция для проверки содержания span с ошибкой
const searchSpunWithError = () => {
    if(document.querySelector('.error-message-block')){
        const spanForDelete = document.querySelector('.error-message-block')
         return spanForDelete.remove()
    }
}
const createTaskForm = document.querySelector('.create-task-block')

createTaskForm.addEventListener('submit', (event) => {
    //Отключаем обновление страницы при submit
    event.preventDefault();
    //Получаем таргет того инпута, по которуму был клик
    const {target} = event;
    //Получаем значение в инпуте
    const inputValue = target.taskName.value;
    //Проверяем содержит ли span данную задачу
    /* Попробовал найти содержание через спан, насколько это оптимальный способ?
    const seeIncludeInSpan = document.querySelectorAll('.task-item__text')
    const right = []
    seeIncludeInSpan.forEach((span) => {
        return right.push(span.textContent)
        })
    const containsTrue = right.includes(inputValue)*/
    
    
    //Проверяем есть ли уже данный спан, чтобы запись не накладывалась поверх
    searchSpunWithError()
    //Переменная с проверкой на содержание задачи в списке
    const seeInclude = tasks.some(({text}) => {
        return text === inputValue;
    })
    // Делаем валидацию на повтор или отсутствие ввода
    if(seeInclude || inputValue === '') {
        //Создаем нужный спан 
        const spanError = createElements('span');
        spanError.classList = 'error-message-block';
        //Если повтор или пустой
        if(seeInclude){
            spanError.textContent = 'Задача с таким названием уже существует.'
        } else {
            spanError.textContent = 'Название задачи не должно быть пустым.'
        }
        const createTask = document.querySelector('.create-task-block') 
        return createTask.append(spanError)
        } else {
        //Создаем новый объект в массиве задач с значением из input
        pushObjectWithUniqueCod(tasks,inputValue)
        //Через функцию-шаблон создаем новый файл HTML
        const newForAttend1 = createNewHTML(tasks[tasks.length-1])
        //Возвращаем добавление в DOM
        return tasksList.append(newForAttend1)
    } 
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

// console.log(document.querySelector('body'))


//Удаление по кнопке, но с новыми задачами не работает, потому скрипт не запускается заново
let allDeleteButton = document.querySelectorAll('.task-item__delete-button')

allDeleteButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        const {target} = event
        
        const buttonForRemove = document.querySelector(`[data-task-id="${target.dataset.deleteTaskId}"]`)
        buttonForRemove.remove()
       
    })
})



