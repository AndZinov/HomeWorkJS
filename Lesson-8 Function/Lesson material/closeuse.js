const x = 10; // Глобальная переменная

function show() {
  console.log(x); // Выведет 10
}

if (true) {
    const x = 10;
  }
  console.log(x); // Ошибка ReferenceError: x is not defined

  function test() {
    const x = 10;
  }
  console.log(x); // Ошибка ReferenceError: x is not defined


//Цепочка областей видимости

const x = 10;

function show() {
  const y = 20;

  if (true) {
    const z = 30;
    console.log(x + y + z);
  }
}

show(); // Выведет в консоль 60


//Closeuse

function outer() {
    let x = 1;
  
    function inner() {
      console.log(x);
      x++;
    }
  
    return inner;
  }
  
  const func = outer();
  func(); // Выведет в консоль: 1
  func(); // Выведет в консоль: 2


  // Опустим определение функции outer

const func = outer();
func(); // Выведет 1
func(); // Выведет 2

const func2 = outer();
func2(); // Выведет 1