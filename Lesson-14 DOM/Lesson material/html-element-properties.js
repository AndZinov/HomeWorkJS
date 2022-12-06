const taskWrapper = document.querySelector('.tasks__wrapper')
console.log(taskWrapper.className);

taskWrapper.className = 'tasks__wrapper_1';
console.log(taskWrapper.className); //tasks__wrapper_1

const taskBlock = document.querySelector('#tasks')
console.log(taskBlock.id);

//taskBlock.id = 'new_task' для изменения

const submitButton = document.querySelector('.create-task-block__button');
console.log(submitButton.innerText);
console.log(submitButton.textContent);

submitButton.textContent = 'Create new task' //для изменения кнопки

// innerHTML для обработки тегов и создания внутри HTML
console.log(taskBlock.innerHTML);

//taskBlock.innerHTML = '<b>TaskBlock</b>';


//children только чтение

const createTaskForm = document.querySelector('.create-task-block');
console.log(createTaskForm.children)

//data-атрибуты

const firstNavButton = document.querySelector('.main-navigation__button-item')
console.log('dirsNavButton',firstNavButton.dataset.buttonId)

firstNavButton.dataset.buttonId = '10'

//style 
console.log(firstNavButton.style)
firstNavButton.style.fontWeight = 'bold'
firstNavButton.style.boxShadow = 'inset 0 0 0 3px white'
