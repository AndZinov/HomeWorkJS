function hello () {
    console.log('Hello', this)
}
hello()

const person = {
    name: 'Andrey',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function (job,phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
    }
}
person.sayHello()
person.sayHelloWindow()

person.logInfo()

const lena = {
    name:'Elena',
    age: 23,
}

person.logInfo.bind(lena)()// Name is Elena Age is 23

const fnLenaInfoLog = person.logInfo.bind(lena)
fnLenaInfoLog ('frontEnd', ' 8-999-5454-3-34-3') //Elena info: Name is Elena Age is 23 Job is frontEnd Phone is  8-999-5454-3-34-3
// или иожно заменить запись выше вот так
/*
const fnLenaInfoLog = person.logInfo.bind(lena, 'frontEnd', ' 8-999-5454-3-34-3')
fnLenaInfoLog () */

//call, apply

person.logInfo.call(lena,'frontEnd', ' 8-999-5454-3-34-3') // Сразу вызывает функцию, bind только через функцию
person.logInfo.apply(lena,['frontEnd', ' 8-999-5454-3-34-3']) 


/// =============== Task

const array = [1, 2, 3 , 4, 5];
// function multBy(arr,n){
//     return arr.map(function(i){
//         return i * n
//     })
// }
// 

Array.prototype.multBy = function (n) {
    return this.map(function(i){
                return i * n
            })
}

console.log(array.multBy(2)) //(5) [2, 4, 6, 8, 10]


