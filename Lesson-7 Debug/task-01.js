let health = prompt('Введите число параметра "здоровье" для персонажа')
health = Number(health);
//1. Запуская данный код в консоле мы видим сообщение "Unexpected token )" в 3 строке, переносим условия в скобки 2. и видим сообщение "Unexpected token !" указыввем верный синтаксис 
if (health < 0 || !health) {
    console.log(health,typeof health, !health);
    alert('Параметр "здоровье" должен быть больше нуля!')
} else { //3. Запуская данный код в консоле мы видим сообщение "Unexpected token )" в 6 строке
  alert(`Параметр здоровье равен ${health}`);  // 4. Запуская данный код в консоле мы видим сообщение "Unexpected token )" в 7 строке, возводим в ковычки выражение в alert
} // 5. Health is not defined, меняем название