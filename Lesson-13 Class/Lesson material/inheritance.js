//Наследование

// базовый класс Plane

class Plane{
    constructor(type, numberOfPassangers){
        this.type = type;
        this.numberOfPassangers = numberOfPassangers;
    }
    startFlight (){
        console.log('Fly!')
    }
}


//Дочерний класс MilitaryPlane

class MilitaryPlane extends Plane {
    constructor(type){  
        super(type, 0);
        this.numberOFGuns = 0;
    }
    startFlight (){
        console.log('Fly in atack!')
    }
    setNumberOfGuns (numberOFGuns){
        this.numberOFGuns = this.numberOFGuns
    }
    shoot(){
        console.log('Fire!!!')
    }
}


const plane = new Plane('Пассажирский', 100)
console.log(plane);
plane.startFlight();

const militaryPlane = new MilitaryPlane('military')

militaryPlane.startFlight();
militaryPlane.setNumberOfGuns(4);
militaryPlane.shoot();
console.log('militariPlane', militaryPlane);



//instanceof проверяет принаджлежит ли объект к определенному классу

console.log(militaryPlane instanceof MilitaryPlane); //true
console.log(militaryPlane instanceof Plane); //true