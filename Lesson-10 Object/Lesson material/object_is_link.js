//7 -примитивы (не ссылочный тип)
//1 - не примитив - объект (ссылочный тип)

const setName = (entity, value) => {
    if (typeof entity === 'object') {
        entity.name = value;
    } else {
        entity = value;
    }
}

const developer = {
    name: 'Maksim',
};
let developerName = ' Maxim';

setName(developer, 'Max');
setName(developerName, 'Max');

console.log('developer', developer );
console.log('developerName', developerName)

const entity = {};
const entityCopy = entity;
console.log(entity === entityCopy)

console.log({} === {});
console.log([] === []);