//CСтарые методы получения данных из HTML
const taskBlock = document.getElementById('tasks'); //id
console.log(taskBlock);
const allNavButtons = document.getElementsByClassName('main-navigation__button-item') // class
console.log(allNavButtons);
const allNuttons = document.getElementsByTagName('button')
console.log(allNuttons);

//Новые методы querySelector

const taskBlock2 = document.querySelector('#tasks'); //id
console.log(taskBlock2);
const mainNavigation = document.querySelector('.main-navigation') //class
console.log(mainNavigation)
const firstButton = document.querySelector('button') //Получение по тегу
console.log(firstButton)

const thirdNavigationButton = document.querySelector('[data-button-id="3"]') //Получение по атрибуту
console.log('thirdNavigationButton', thirdNavigationButton);


//querySelectorAll

const allNavigationButton = document.querySelectorAll('.main-navigation__button-item')
console.log(allNavigationButton)
allNavigationButton.forEach((button, index) => {
    console.log(index, button)
})

const createTaskBlock = document.querySelector('.create-task-block')
const submitButton =createTaskBlock.querySelector('[type = "submit"]')
console.log('submitButton',submitButton)

//Комбинированный поиск по селектору
const elements = document.querySelector("#main p.text"); //В этом примере осуществляется поиск всех элементов p с классом text, вложенных внутрь элемента с идентификатором #main. Пробел указывает на поиск по потомкам (селектор потомков).