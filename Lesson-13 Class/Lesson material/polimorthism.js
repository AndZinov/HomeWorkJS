// Полиморфизм
// одно действие и несколько реализаций

class Animal {
    constructor (name) {
        this.name = name;
    }

    makeSound() {}
}

class Dog extends Animal {
    constructor (name) {
        super (name);
    }
    makeSound() {
        console.log('Gav-Gav')
    }
}

class Hourse extends Animal {
    constructor (name) {
        super (name);
    }
    makeSound() {
        console.log('Igo-go-go-go')
    }
}