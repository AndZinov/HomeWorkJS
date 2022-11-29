//this - object

console.log(this)

//Window для всех браузеров , global для NodeJS


const user = {
    name: 'Maksim',
    dateOfBirth: 1996,
    //Cоздание функции внутри объекта метод 1
    getName (){
        //return user.name;
        return this.name;
    },
    calculateAge () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.dateOfBirth;
    },
    //Cоздание функции внутри объекта метод 2
    getAllInfo: function () {
        const age = this.calculateAge();
        console.log('Name:', this.name, 'Age:', age)
    }
}

console.log(user.getName());
console.log(user.calculateAge());
user.getAllInfo()

// 1. Глобальная стрелочная функция
const globalArrowFunc = () => console.log(this);

const obj = {
  // 2. Стрелочная функция в объекте
  objArrowFunc: () => console.log(this),
  objFunc() {
    // 3. Вложенная стрелочная функция
    const nestedObjFunc = () => console.log(this);
    nestedObjFunc();
  }
};

globalArrowFunc(); // window
obj.objArrowFunc(); // window
obj.objFunc(); // object

//Значение this не предопределено заранее для функции. 
//Оно меняется в зависимости от того, как именно и откуда была вызвана функция.
function showYear() {
    console.log(this.year);
  }
  
  showYear(); // Выведет: undefined
  
  const car = { name: "Toyota Corolla", year: 2017 };
  car.showYear = showYear; // Добавляем метод
  car.showYear(); // Выведет: 2017

//bind, call, apply - только для функций

const user2 = {
     name:'Andrey'
}

const user2Name = user.getName.call(user2);
console.log(user2Name)