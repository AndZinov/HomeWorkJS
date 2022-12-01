//static нельзя делать с this

class Car {
    static isCar (car){
        return car instanceof Car;
    }

    static #initialParams = {
        name: 'Audi',
        maxSpeed: 150,
    }

    constructor (name,maxSpeed){
        this.name = name || Car.#initialParams.name;
        this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed
    }
    drive () {
        console.log(`Car ${this.name} driving now`)
    }
}

const car = new Car()
const isCar = Car.isCar(car)
console.log(car)
console.log(isCar)