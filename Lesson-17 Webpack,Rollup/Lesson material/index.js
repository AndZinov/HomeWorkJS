import "./index.css";
import JS_IMAGE from './asset/js.png';

console.log('Hello world')

const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.src = JS_IMAGE;


document.body.append(jsImageHTML);

const array = [1, 2, 3].map(n => n + 1);
console.log(array);


