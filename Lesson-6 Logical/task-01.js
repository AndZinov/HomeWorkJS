let existingUserLogin = 'the_best_user';
let existingUserPassword = '12345678';
let userLogin = prompt('Enter you login');
let userPassword = prompt('Enter you password');
userLogin = userLogin.trim();
userPassword = userPassword.trim();
if (userLogin === existingUserLogin && userPassword === existingUserPassword){
    alert(`You are welcome ${userLogin} !`);
} else {
    alert ('Login and (or) Password entered incorrectly!');
}