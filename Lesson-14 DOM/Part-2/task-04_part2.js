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


//Удаление по кнопке ЗАДАЧА 3

//Новая функция для создания элементов
function createNewElements (el, clas) {
    const newElement = document.createElement(`${el}`)
    if (clas){
        newElement.classList = `${clas}`
    }
   
    return newElement
}

//Создаем новый HTML элемент
const modalOverlay = createNewElements('div', 'modal-overlay  modal-overlay_hidden');
document.querySelector('body').append(modalOverlay);

const deleteModal = createNewElements('div', 'delete-modal__question');
modalOverlay.append(deleteModal)

const h3 = createNewElements('h3','delete-modal__question');
h3.textContent = 'Вы действительно хотите удалить эту задачу?';
deleteModal.append(h3)

const deleteButton = createNewElements('div', 'delete-modal__buttons');
deleteModal.append(deleteButton);

const buttonCancel = createNewElements('button', 'delete-modal__button delete-modal__cancel-button');
buttonCancel.textContent = 'Отмена'
deleteButton.append(buttonCancel);

const buttonDelete = createNewElements('button', 'delete-modal__button delete-modal__confirm-button');
buttonDelete.textContent = 'Удалить'
deleteButton.append(buttonDelete);

//Добавляем реагирование на удаление
tasksList.addEventListener('click', (event) => {
    const {target} = event;
    const isDeleteButton = target.closest('.task-item__delete-button')
    const deleteId = target.dataset.deleteTaskId
    if(isDeleteButton) {
        
        console.log(deleteId)
        modalOverlay.classList.remove('modal-overlay_hidden')
        modalListener(deleteId);
        
    }
})

//Функция для действия в модальном окне
function modalListener (idForDelete) {
    deleteButton.addEventListener('click', (event) => {
        const {target} = event;
        const isDeleteButton = target.closest('.delete-modal__confirm-button') 
        const isCancelButton = target.closest('.delete-modal__cancel-button')
        if(isDeleteButton){
            const buttonForRemove = tasksList.querySelector(`[data-task-id="${idForDelete}"]`);
            //Без этого if в консоле отображалась передача пустого айди и я не нашел почему
            if(buttonForRemove){
            buttonForRemove.remove()
            modalOverlay.classList.add('modal-overlay_hidden')
            }
        }
        if(isCancelButton){
            modalOverlay.classList.add('modal-overlay_hidden')
        }
    })
}





// Задание 4 

document.addEventListener('keydown', (event) => {
    const {key} = event;
    const checkTheme = bodyBackground.style.background;
    if(key === 'Tab'){
        event.preventDefault()
        bodyBackground.style.background = 'initial';
        taskItem.forEach((element) => {
            element.style.color = 'initial'
        })
        allButton.forEach((element) => {
            element.style.border = 'none'
        })
        if(checkTheme === 'initial'){
            bodyBackground.style.background = '#24292E';
            taskItem.forEach((element) => {
                element.style.color = '#ffffff'
            })
            allButton.forEach((element) => {
                element.style.border = '1px solid #ffffff'
            })
        }       
    }
})

const bodyBackground = document.querySelector('body');
const taskItem = document.querySelectorAll('.task-item');
const allButton = document.querySelectorAll('.buttom')
bodyBackground.style.background = 'initial';
taskItem.forEach((element) => {
            element.style.color = 'initial'
        })
allButton.forEach((element) => {
            element.style.border = 'none'
        })


//Решение от школы 
/* 
let isDark = false;

const changeTheme = ({ bodyBackground, taskItemTextColor, buttonBorder }) => {
  document.body.style.background = bodyBackground;
  document.querySelectorAll(".task-item").forEach((taskItem) => {
    taskItem.style.color = taskItemTextColor;
  });
  document.querySelectorAll("button").forEach((button) => {
    button.style.border = buttonBorder;
  });
};

window.addEventListener("keydown", (event) => {
  const { code } = event;
  if (code === "Tab") {
    event.preventDefault();
    isDark = !isDark;
    if (isDark) {
      changeTheme({
        bodyBackground: "#24292E",
        taskItemTextColor: "#ffffff",
        buttonBorder: "1px solid #ffffff"
      });
    } else {
      changeTheme({
        bodyBackground: "initial",
        taskItemTextColor: "initial",
        buttonBorder: "none"
      });
    }
  }
});

*/