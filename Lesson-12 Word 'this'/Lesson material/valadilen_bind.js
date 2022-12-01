const person = {
    name: "Andrey",

}

function info (phone,email) {
    console.log(`Name:, ${this.name}, Phone: ${phone}, Email: ${email}` )
}
info.bind(person)('1234', 'dfs@ndsk@.ru') //Name:, Andrey, Phone: 1234, Email: dfs@ndsk/.ru
info.bind(person, '12323')() //Name:, Andrey, Phone: 12323, Email: undefined

//1 Простой
/* Результат без ...rest
function bind(fn, context){
    return fn.bind(context)
}

bind(info, person)() //Name:, Andrey, Phone: undefined, Email: undefined
bind(info, person, '12323')('dfs@ndsk@.ru') //Name:, Andrey, Phone: dfs@ndsk@.ru, Email: undefined
bind(info, person, '12323', 'dfs@ndsk@.ru')() //Name:, Andrey, Phone: undefined, Email: undefined
*/
/*
// Плохой вариант
function bind(fn, context, ...rest){
    return fn.bind(context, ...rest)
}

bind(info, person)() //Name:, Andrey, Phone: undefined, Email: undefined
bind(info, person, '12323')('dfs@ndsk@.ru') //Name:, Andrey, Phone: 1234, Email: dfs@ndsk/.ru
bind(info, person, '12323', 'dfs@ndsk@.ru')() //Name:, Andrey, Phone: 1234, Email: dfs@ndsk/.ru */

// 2.Без встроенных методов
/*
function bind(fn, context, ...rest){
    return function (...args) {
        const uniqId = Date.now().toString()
        context[uniqId] = fn

        const result = context[uniqId](...rest.concat(args));

        delete context[uniqId];

        return result
    }
}

bind(info, person)() //Name:, Andrey, Phone: undefined, Email: undefined
bind(info, person, '12323')('dfs@ndsk@.ru') //Name:, Andrey, Phone: 1234, Email: dfs@ndsk/.ru
bind(info, person, '12323', 'dfs@ndsk@.ru')() //Name:, Andrey, Phone: 1234, Email: dfs@ndsk/.ru

console.log(person)*/

// 3 ES5
/*
function bind(fn, context){
    const rest = Array.prototype.slice.call(arguments, 2)
    return function () {
        const args = Array.prototype.slice.call(arguments)
        return fn.apply(context, rest.concat(args))
    }
}


bind(info, person)() //Name:, Andrey, Phone: undefined, Email: undefined
bind(info, person, '12323')('dfs@ndsk@.ru') //Name:, Andrey, Phone: 1234, Email: dfs@ndsk/.ru
bind(info, person, '12323', 'dfs@ndsk@.ru')() //Name:, Andrey, Phone: 1234, Email: dfs@ndsk/.ru */

// 4 ES6
/*
function bind(fn, context,...rest){
    return function (...args) {
        // return fn.apply(context, rest.concat(args))
        return fn.call(context, ...rest.concat(args))
    }
}


bind(info, person)() //Name:, Andrey, Phone: undefined, Email: undefined
bind(info, person, '12323')('dfs@ndsk@.ru') //Name:, Andrey, Phone: 1234, Email: dfs@ndsk/.ru
bind(info, person, '12323', 'dfs@ndsk@.ru')() //Name:, Andrey, Phone: 1234, Email: dfs@ndsk/.ru */

//Call
function call(fn,context, ...args){
    const uniqId = Date.now().toString() //Создаем уникальный ID

    context[uniqId] = fn //Присваем этот уникальный ID

    const result = context[uniqId](...args);

    delete context[uniqId];

    return result
}
call(info, person , '1234', 'call@mail.ru') //Name:, Andrey, Phone: 1234, Email: c@mail.ru

//Apply

function apply(fn,context, args){
    const uniqId = Date.now().toString()

    context[uniqId] = fn

    const result = context[uniqId](...args);

    delete context[uniqId];

    return result
}
apply(info, person , ['1234', 'apply@mail.ru']) //Name:, Andrey, Phone: 1234, Email: apply@mail.ru