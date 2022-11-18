// splice изменяет основной массив, удаляет элементы из массива и, если это необходимо, заменяет их другими данными.
const cars = ['BMW', 'Mercedes', 'Lada'];

const removedElements = cars.splice(0,2,'Audi', 'Bugatti');
console.log(cars);

console.log('removedElements', removedElements)

//slice не изменяет основной массив

const agesOfDevelopers = [25, 18, 45, 30];
console.log('agesOfDevelopers', agesOfDevelopers.slice(0,2));
const sliceAgesOfDevelopers = agesOfDevelopers.slice(0,2);
console.log(sliceAgesOfDevelopers);

//indexOF

const favoritFood = ['Icecream', 'Cake', 'Coffee'];
const indexOfFood = favoritFood.indexOf('Coffee');
console.log(indexOfFood);

//includes

const technologies = ['JavaScript', 'HTML', 'CSS'];
const isTechnologyExists = technologies.includes('CSS');
console.log(isTechnologyExists);

//split + join

const listOfOrders = 'T-shirt, Short, Sneakers, Bag';
const listOfOrdersArray = listOfOrders.split(', ');
console.log(listOfOrdersArray);

const ordersString = listOfOrdersArray.join(', ');
console.log(ordersString);

//reverse изменяет текущий массив

technologies.reverse();
console.log(technologies);
