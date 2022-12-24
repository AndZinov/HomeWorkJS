//Event loop 

function sayHello (name) {
    console.log(`Hello ${name}`)
}

console.log('start');
sayHello('Andrey');
setTimeout(() => {
    sayHello('Maksim');
},0)

sayHello('Charly');
console.log('end');