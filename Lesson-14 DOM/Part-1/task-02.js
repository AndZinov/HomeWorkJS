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

//Функция для создания шаблона 
const createNewHTML = (object) => {
    const taskItem = document.createElement('div');
    taskItem.classList = 'task-item';
    taskItem.dataset.taskId = `${object.id}`;

    const mainContainer = document.createElement('div');
    mainContainer.classList = 'task-item__main-container';
    taskItem.prepend(mainContainer);

    const mainContent = document.createElement('div');
    mainContent.classList = 'task-item__main-content';
    mainContainer.prepend(mainContent)

    const form = document.createElement('form');
    form.classList = 'checkbox-form'
    mainContent.prepend(form)

    const input = document.createElement('input');
    input.classList = 'checkbox-form__checkbox'
    input.type = 'checkbox';
    input.id = `${object.id}`;
    form.prepend(input);

    const label = document.createElement('label');
    label.htmlFor = `${object.id}`;
    form.append(label);

    const span = document.createElement('span');
    span.classList = 'task-item__text';
    span.textContent = `${object.text}`;
    mainContent.append(span);

    const button = document.createElement('button');
    button.classList = 'task-item__delete-button default-button delete-button'
    button.dataset.deleteTaskId = '5'
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