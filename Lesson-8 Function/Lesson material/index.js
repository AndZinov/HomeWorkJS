function doSomething() {
    // Код функции
  }
//Пример
  function sayHello() {
    alert("Hello world!");
  }

  function showTotalPrice(price, count) {
    const totalPrice = price * count; // Используем параметры в вычислениях
    console.log(totalPrice);
  }

  function showTotalPrice(price, count) {
    console.log(price * count);
  }
  
  showTotalPrice(100, 5); // Выведет в консоль: 500
  showTotalPrice(350, 2); // Выведет в консоль: 700


  // Возврат значения
  function getTotalPrice(price, count) {
    const tax = 0.2;
    return price * count * (1 + tax); // Возвращаем результат
  }
  
  const totalPrice1 = getTotalPrice(100, 5); // Запишет: 600
  const totalPrice2 = getTotalPrice(350, 2); // Запишет: 840



  //Callback

  function getTotalPrice(price, count) {
    const tax = 0.2;
    return price * count * (1 + tax);
  }
  
  function showTotalPrice(price, count, showMethod) {
    showMethod(getTotalPrice(price, count));
  }
  showTotalPrice(100, 5, alert); // Выведет диалоговое окно с ценой
  showTotalPrice(100, 5, console.log); // Выведет цену в консоль

  //Анонимные функции

  showTotalPrice(100, 5, function(price) {
    alert(`Итоговая цена: ${price}`);
  });

  function showPriceWithText(price) {
    alert(`Итоговая цена: ${price}`);
  }
  
  showPrice(100, 5, showPriceWithText);