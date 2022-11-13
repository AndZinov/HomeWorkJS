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