/* Через innerHTML
const makeHTML = document.querySelector('body')

makeHTML.innerHTML = `<form class="create-user-form">
<label>
    Имя
    <input type="text" name="userName" placeholder="Введите ваше имя">
</label>
<label>
    Пароль
    <input type="password" name="password" placeholder="Придумайте Пароль">
</label>
<button type="submit">
    Подтвердить
</button>
</form>`
console.log(makeHTML) */



//createElement 


const bodyInHTML = document.querySelector('body');
//Создаем форму
const newForm = document.createElement('form');
newForm.className = 'create-user-form';
//Создаем лейбл
const label1 = document.createElement('label');
label1.textContent = 'Имя';
//Создаем input
const newInput1 = document.createElement('input');
newInput1.type = 'text';
newInput1.name = 'userName';
newInput1.placeholder = 'Введите ваше имя';
//Создаем лейбл2
const label2 = document.createElement('label');
label2.textContent = 'Пароль';
//Создаем input2
const newInput2 = document.createElement('input');
newInput2.type = 'password';
newInput2.name = 'password';
newInput2.placeholder = 'Придумайте Пароль';
//Создаем кнопку
const newButton = document.createElement('button')
newButton.type = 'submit'
newButton.textContent = 'Подтвердить'


//Первый label
bodyInHTML.prepend(newForm)
newForm.prepend(label1)
label1.append(newInput1)
//Второй label
newForm.insertAdjacentElement('beforeend', label2)
label2.append(newInput2)
//Button

newForm.insertAdjacentElement('beforeend', newButton)

console.log(bodyInHTML) 