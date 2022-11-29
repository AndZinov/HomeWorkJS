const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
       return 'Гав-Гав';
    }
 }
 
const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
       return 'Чик-чирик';
    }
 }

 function makeDomestic (isDomestic){ 
        const newObject = {
            ...this,
            isDomestic: isDomestic
        }
        console.log(newObject);
        console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
        return newObject 
 }

 makeDomestic.bind(dog, true)();
 makeDomestic.call(bird, false);
 makeDomestic.apply(bird, [false]);


 
  