// ООП Объектно-ориентированное программирование


//function и class

// function Animal(name) {
//     this.name = name;

//     this.getName = function () {
//         return this.name
//     }
// }

class Animal {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}


//new создание новых объектов
const cat = new Animal('Cat')
console.log(cat)
console.log(cat.name)
console.log(cat.getName ())

const dog = new Animal('Doger');
console.log(dog)

