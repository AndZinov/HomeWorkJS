const doSomething = function() {
    // Код функции
  };

  // Function Expression
const sayHello1 = function() {
    alert("Hello");
  };

  // Function Declaration
function sayHello2() {
    alert("Hello");
  }

  
  //Arrow finction expression
  const sayHello = () => {
    alert("Hello");
  };

const sayHello = name => alert(`Hello, ${name}`);
const calc = (a, b) => a + b;
sayHello("Vasya"); // Выведет сообщение "Hello, Vasya"
console.log(calc(1, 2)) // Выведет в консоль: 3



//Стрелочная функция в качестве коллбэка

const sayHello = (name, showMethod) => {
    showMethod(`Hello, ${name}`);
  };
  
  // Используем стрелочную анонимную функцию в качестве коллбэка
  sayHello("Vasya", (message) => {
    alert(message);
  });
  
  // Ещё более короткая запись
  sayHello("Petya", message => alert(message));