const student = {
    id: 1,
    programmingLanguage: 'JavaScript',
    hasExperienceInReact: false,
};

//Добавление

student.experience = 6;
console.log('student', student);

//Удаление

delete student.hasExperienceInReact;
console.log('student', student);

//Изменение

student.experience = 12;
student.id = 2;
console.log('student', student);

//function

// function createCar(name, year) {
//     return {
//       name: name,
//       year: year
//     };
//   }

  function createCar(name, year) {
    return {
      name,
      year
    };
  }
  console.log(createCar('Toyota', 2018))