//createElements

const neewNavButton = document.createElement('a');
neewNavButton.className = 'main-navigation__button-item';
neewNavButton.href = '#tasks_expired';
neewNavButton.dataset.buttonId = '4';
neewNavButton.textContent = 'Просроченые задачи'

console.log(neewNavButton)

// append, prepend - добавление созданого абзаца в документ в  конец / самое начало 

const mainNavigation = document.querySelector('.main-navigation');
mainNavigation.append(neewNavButton);

//insertAdjacentElement "beforebegin", "afterbegin", "beforeend", "afterend"s

mainNavigation.insertAdjacentElement('afterbegin', neewNavButton)

//replaceWith()
/*
const firstParagraph = document.querySelector("p");
firstParagraph.replaceWith(newParagraph);
<div id="main">
  <p class="text" data-id="3">Третий абзац</p>
  <p class="text" data-id="2">Второй абзац</p>
</div>



//before
const div = document.querySelector("#main");
div.before(newParagraph);

//after
const div = document.querySelector("#main");
div.after(newParagraph);*/

//remove
//mainNavigation.remove();

//closest ищет ближайшего родителя
 const taskItemText = document.querySelector('.task-item__text');
  console.log(taskItemText)

  const taskItem = taskItemText.closest('.task-item');
  console.log(taskItem)

  //classList add,remove,toggle

  const firstNavigationButton = document.querySelector('.main-navigation__button-item');
  firstNavigationButton.classList.add('main-navigation__button-item_selected');
  firstNavigationButton.classList.remove('main-navigation__button-item_selected');
  firstNavigationButton.classList.toggle('main-navigation__button-item_selected');

  const createTaskInput = document.querySelector('.create-task-block__input');
  console.log(createTaskInput.hasAttribute('type')) //Проверяем есть ли атрибут
  console.log(createTaskInput.getAttribute('value')) //Получить атрибут
 createTaskInput.removeAttribute('placeholder') //Удаление атрибута
 createTaskInput.setAttribute('placeholder', 'Создать новую задачу') //Добавление атрибута