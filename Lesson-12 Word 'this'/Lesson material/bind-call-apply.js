const mainHero = {
    fullName: 'SpiderMan',
    health:65,
    strenght: 5,
};

const badHero = {
    fullName: 'Joker',
    health: 55,
    strenght: 10,
}

function printHeroInfo (extraInfo = '') {
    console.log('this', this)
    console.log(`Name: ${this.fullName} , Health ${this.health}, Strenght: ${this.strenght}, ${extraInfo}`);
}


//bind, call, apply

printHeroInfo.call(badHero, 'Role: Demon'); //Name: Joker , Health 55, Strenght: 10, 
printHeroInfo.apply(badHero, ['Role: Demon', '2', '3']); //Name: Joker , Health 55, Strenght: 10, 

const bindedPrintHeroInfo = printHeroInfo.bind(badHero, 'Role: Head Hero');
bindedPrintHeroInfo();

function showInfo(key1, key2) {
    console.log(this[key1] + " " + this[key2]);
  }

const car = {
    name: "Kia Rio",
    year: 2021,
    modification: "1.6 AT"
  };
  
  // call
  showInfo.call(car, "name", "year"); // Kia Rio 2021
  showInfo.call(car, "name", "modification"); // Kia Rio 1.6 AT
  
  // apply
  showInfo.apply(car, ["name", "year"]); // Kia Rio 2021
  showInfo.apply(car, ["name", "modification"]); // Kia Rio 1.6 AT

  //bind
  function showName() {
    console.log(this.name);
  }
  
  const car = { name: "Toyota Corolla" };
  const carOwner = { name: "Ivan Ivanov" };
  
  // Создаем функцию с контекстом car
  const showCarName = showName.bind(car); 
  
  // Создаем функцию с контекстом carOwner
  const showCarOwnerName = showName.bind(carOwner);
  
  // Вызываем новые функции
  showCarName(); // Toyota Corolla
  showCarOwnerName(); // Ivan Ivanov

  const car = {
    name: "Toyota Corolla",
    showName() {
      console.log(this.name);
    }
  };
  
  const bike = {
    name: "GT Avalanche"
  };
  
  bike.showName = car.showName.bind(bike); // Копируем метод
  bike.showName(); // GT Avalanche