// Function declaration

function getName1 (name){
    return `Имя равно ${name}`;
}

const result1 = getName1('Andrey');
console.log(result1);

//Function expression 

const getName2 = function (name) {
    return `Имя равно ${name}`;
}

const result2 = getName2('Maksim');
console.log(result2);

//Arrow Function Expression

const getName3 = name => { return `Имя равно ${name}`
}; 

const result3 = getName3('Egor');
console.log(result3)



