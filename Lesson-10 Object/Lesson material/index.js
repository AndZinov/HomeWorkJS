const developer = {
    //key: value,
    name: 'Maksim',
    job: 'Front-End developer',
    experience: 24,
    // jobAllInfo: {
    //     type: 'Front-End',
    //     framework: 'ReactJS',
    // }
}
console.log(developer)

// console.log(developer.jobAllInfo);
// console.log(developer.jobAllInfo.framework);
//Опциональная цепочка ?.



//1 без опциональной цепочки

// if(developer.jobAllInfo.framework) {
if(developer && developer.jobAllInfo && developer.jobAllInfo.framework) {
    console.log('Разработчик уже знает фреймворк');
} else {
    console.log('Разработчик еще НЕ знает фреймворк');
}

// 2

if(developer?.jobAllInfo?.framework) {
    console.log('Разработчик уже знает фреймворк');
} else {
    console.log('Разработчик еще НЕ знает фреймворк');
}



/*
//1 Recomend
console.log('name', developer.name);
console.log('jobAllInfo', developer.jobAllInfo);

//2

console.log('name', developer['name']);

const key = 'name';
console.log('name', developer[key])*/

// console.log('type', developer.jobAllInfo.type);
// console.log('framework', developer['jobAllInfo']['framework'])