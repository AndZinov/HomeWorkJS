const user = {
    name: 'Andrey',
    programmingLanguage: 'JavaScript',
    getName() {
        return this.name;
    },

    //У стрелочной функиции нет this, поэтому ее не вызвать из объекта через this использовать функцию ниже
    // getProgrammingLanguage:() => {
    //     return this.programmingLanguage;
    // },
    getProgrammingLanguage: function () {
            return this.programmingLanguage;
        },
}

console.log(user.getName()); //Andrey

const newGetName = user.getName 

console.log('newGetName', newGetName()) //Пусто, ничего

console.log('newGetName', newGetName.call(user)) //Andrey

console.log(user.getProgrammingLanguage.call(user)); // JavaScript

