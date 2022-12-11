const groceries = {
    "73Wakv": {
      name: "Orange Juice",
      price: 1.5,
      discount: 10
    },
    "5L3db9": {
      name: "Chocolate",
      price: 2,
      discount: 0
    },
    '64Lvfr': {
        name: 'Ice cream',
        price: 3,
        discount: 50
    },
    '93hfnD': {
        name: 'Burger Cheese',
        price: 10,
        discount: 10
    }
  };

  const shoppingBag = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 23 },
    { productId: '64Lvfr', count: 5 },
    { productId: '93hfnD', count: 3 },
  ];
// Мое первое решение
/*
//Собираем цену всех продуктов c учетом скидок и количества
const searchEachProductPrice = id => {
    // создаем массив который будем возвращать
    const priceShopingBag = [];
    //Перебираем шопингбэг и считаем стоимость каждого продукта помещая конечную стоимость в массив
    id.forEach( element => {
        const productPrice = groceries[element.productId].price;
        const productDiscont = groceries[element.productId].discount;
        const countProduct = element.count;
        priceShopingBag.push(productPrice * countProduct * (1 - productDiscont / 100));
        })
    return priceShopingBag
};
//Считаем сумму всех продуктов и выводим ее округляя до 100
const getTotalPriceOfShoppingBag = (shoppingBagArray) => {
    const allPrice = searchEachProductPrice(shoppingBagArray)
    const sum = allPrice.reduce((acc, totalPriceEachProduct) => {
       return acc + totalPriceEachProduct;
    },0)
    return sum.toFixed([2])
};
  
  console.log('Cost you purchase:', getTotalPriceOfShoppingBag(shoppingBag)) 
*/


// Решение с деструктуризацией

// Делаем деструктуризацию 
const productPrice2 = (shoppingBag, groceries) => {
    return [
        groceries[shoppingBag.productId].price,
        groceries[shoppingBag.productId].discount,
        shoppingBag.count
    ]
}
//Считаем сумму всех продуктов и выводим ее округляя до 100
const getTotalPriceOfShoppingBag = (shoppingBagArray) => {
    const priceShopingBag = [];
    //Перебираем шопингбэг и считаем стоимость каждого продукта помещая конечную стоимость в массив
    shoppingBagArray.forEach( element => {
        const [price, discount, count] = productPrice2(element, groceries);
        priceShopingBag.push(price * count * (1 - discount / 100));
        })
    const sum = priceShopingBag.reduce((acc, totalPriceEachProduct) => {
       return acc + totalPriceEachProduct;
    },0)
    return sum.toFixed([2])
};
  
  console.log('Cost you purchase:', getTotalPriceOfShoppingBag(shoppingBag)) 

 
  //Решение от Саши

  const sumOfProduct = shoppingBag.reduce((acc, {productId, count}) => { // из элемента сразу берем id и count
    const {price, discount} = groceries[productId]
    return acc + price * count * (1 - discount / 100)//нашли нужный продукт по индексу
   // обрабатываем скидку + цену
   // возвращаем сумму + скидку
   }, 0)
   console.log(+sumOfProduct.toFixed(2))
   */