let passwordUser = prompt('Enter password');
let replaceNumber = passwordUser.replace(/\d/, '');
console.log(replaceNumber);
if (passwordUser.length <=2 || passwordUser.length > 30) {
    alert(`Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.`)
} else if (!isNaN(Number(passwordUser))) {
    alert(`Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.`)
} else if (passwordUser === passwordUser.toLowerCase()){
    alert(`Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.`)
} else if (replaceNumber.length === passwordUser.length){
    alert(`Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.`)
} else {
    alert ('Пароль валидный. Добро пожаловать в аккаунт!')
}

// Решение задачи от школы
/*
const password = prompt("Введите пароль");
const errorMessage =
  "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.";
const successMessage = "Пароль валидный. Добро пожаловать в аккаунт!";

if (password === null || password.length < 3 || password.length > 30) {
  alert(errorMessage);
} else {
  let hasBigSymbol = false;
  let hasNumbers = false;
  for (let i = 0; i < password.length; i++) {
    const symbol = password[i];
    const isNumberSymbol = !isNaN(parseInt(symbol));
    if (symbol === symbol.toUpperCase() && !isNumberSymbol) {
      hasBigSymbol = true;
    }
    if (isNumberSymbol) {
      hasNumbers = true;
    }
  }

  if (!hasBigSymbol || !hasNumbers) {
    alert(errorMessage);
  } else {
    alert(successMessage);
  }
}
*/