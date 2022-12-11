//Инкапсуляция


//public
//privet # - можно вызывать только из класса 

class Developer {
    #salary

    constructor (name, programmingLanguage){
        this.name = name;
        this.programmingLanguage = programmingLanguage;
        this.#salary = 3000;
    }

    get devSalary () {
        return this.#salary;
    }

    set setSalary (salary) {
        return this.#salary = salary;
    }
    
    startCoding() {
        console.log(this.#salary)
        console.log(`${this.name} начинает писать код!`);
        this.#printProgrammingLanguage()
    }

    #printProgrammingLanguage() {
        console.log(`Язык программирования ${this.programmingLanguage}`);
    }
}

const developer = new Developer ('Andrey', 'JavaScript')
console.log('Test on see', developer)
console.log(developer.salary)
// class JuniorDeveloper extends Developer {
//     constructor (name, programmingLanguage) {
//         super(name, programmingLanguage)
//     }
// }
// const juniorDeveloper = new JuniorDeveloper ('Igot', 'JavaScript')

// developer.startCoding() 
// console.log('geter',developer.devSalary) //3000 Получение приватного поля через get 


// developer.setSalary = 5000 //Для передачи нового значения через set
// console.log('seter',developer.devSalary)//5000

// console.log(Object.keys(developer))

