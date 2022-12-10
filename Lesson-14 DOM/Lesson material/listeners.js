
// const firsNavButton = document.querySelector('.main-navigation__button-item')
// firsNavButton.addEventListener('click', (event) => {
//     console.log(event.target)
//     //const target = event.target;
//     //короткая запись 
//     const {target} =event
//     target.classList.add('main-navigation__button-item_selected')
// })

const allNavButtons = document.querySelectorAll('.main-navigation__button-item')
allNavButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        allNavButtons.forEach(button =>{
            button.classList.remove('main-navigation__button-item_selected')
        })
        const {target} = event;
    target.classList.add('main-navigation__button-item_selected')
    
    });1
})

//submit

const createTaskForm = document.querySelector('.create-task-block');

createTaskForm.addEventListener('submit', (event) => {
    console.log(event)
    event.preventDefault();
    const {target} = event;
    const taskNameInput = target.taskName;
    const inputValue = taskNameInput.value;
    console.log(inputValue)
    if(inputValue){
        alert(`Вы создали задачу ${inputValue}`)
    } else {
        alert('Введите правильные данные')
    }
    
});

//keydown keyup

document.addEventListener('keydown' , (event) => {
    // console.log(event)
    const {key} = event
    console.log('keyup',key)
    // const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`)
    // if (taskItemToDelete){
    //     const deleteConfirm = confirm('Вы действительно хотите удалить данную задачу')
    //     if(deleteConfirm){
    //         taskItemToDelete.remove()
    //     }
    // }
})

document.addEventListener('keyup', (event) => {
    const {key} = event
    console.log('keydown',key)
    const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`)
    if (taskItemToDelete){
        
            taskItemToDelete.remove()
    }
})

//mouseover

const createTooltip = (text) => {
    const tooltip = document.createElement('span');
    tooltip.textContent = text;
    tooltip.className = 'tooltip'
    return tooltip
}

document.addEventListener('mouseover', (event) =>{
    const {target} = event;
    // console.log(target);
    const isOverDeleteButton = target.className.includes('task-item__delete-button')
    if(isOverDeleteButton) {
        console.log('success');
        const taskItemHTML = target.closest('.task-item');
        const taskId = taskItemHTML?.dataset.taskId;
        if(taskId){
            const tooltipHTML = createTooltip(`Удалить задачу под номером ${taskId}`)
            target.append(tooltipHTML)
        }
    }
})

//mouseout

document.addEventListener('mouseout', (evetn) => {
    const {target} = event;
    const isOutFromDeleteButoom = target.className.includes('task-item__delete-button')
    if(isOutFromDeleteButoom){
        const tooltip = document.querySelector('.tooltip');
        if(tooltip){
            tooltip.remove()
        }
    }
})

//mousemove

document.addEventListener('mousemove', (event) => {
    // console.log(event)
})

//contextmenu

document.addEventListener('contextmenu', (event) => {
    console.log(event)
    event.preventDefault()//отменить открытие контекстного меню по умолчанию

})
//change, input

const checkTaskNameInputOnValidation = (value) =>{ 
    if(!value || value.includes('@')){
        return false;
    }
    return true
}

//Правильное получение через одно касание
const createTaskBlock = document.querySelector('.create-task-block');
const taskNameInput = createTaskBlock.querySelector('.create-task-block__input');

/*
taskNameInput.addEventListener('change', (event) => {
    const { target } = event; //Получаем весь инпут
    const {value} = target //Получаем значение из инпута
    const isValid = checkTaskNameInputOnValidation(value);
    const massageBlockFromDOM = document.querySelector('.error-message-block');

    if(!isValid){
        const newMassageBlock = document.createElement('span');
        newMassageBlock.className = 'error-message-block';
        newMassageBlock.textContent = 'Ошибка! Текст для задачи должен быть пустым и не должен содержать символ @'
        createTaskBlock.append(newMassageBlock)
    }else if(isValid && massageBlockFromDOM){
        massageBlockFromDOM.remove()
    }
    // console.log(value);
}); */


taskNameInput.addEventListener('input', (event) => {
    
    const { target } = event; //Получаем весь инпут
    const {value} = target //Получаем значение из инпута
    console.log(value)
    const isValid = checkTaskNameInputOnValidation(value);
    const massageBlockFromDOM = document.querySelector('.error-message-block');

    if(!isValid){
        const newMassageBlock = document.createElement('span');
        newMassageBlock.className = 'error-message-block';
        newMassageBlock.textContent = 'Ошибка! Текст для задачи должен быть пустым и не должен содержать символ @'
        createTaskBlock.append(newMassageBlock)
    }else if(isValid && massageBlockFromDOM){
        massageBlockFromDOM.remove()
    }
    // console.log(value);
});