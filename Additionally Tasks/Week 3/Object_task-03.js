
const killerInfo = {
    James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"]
}
const people = ["Lucas", "Bill"]

/*Для проверки
const killerInfo = {
    Brad: [],
    Megan: ["Ben", "Kevin"],
    Finn: []
}
const people = ["Ben"]*/


const getKiller = (suspectInfo, deadPeople) => {
    const namesKiller = Object.keys(suspectInfo);
    
    //Берем каждое полученное имя и получаем массив
    namesKiller.forEach(nameKiller => {
        //Проверка по людям, если каждый из убитых людей содержится в массиве, то выводит тру
       const killer = deadPeople.every((namePeople) => {
        // Проверяем содержит ли массив у убийцы всех убитых людей
        const elemtExist = suspectInfo[nameKiller].some((listPeople) => {
            return listPeople === namePeople;
        })
        return (elemtExist) 
       })
            if (killer){
             console.log('Убийца', nameKiller);
    }
    })
}
getKiller(killerInfo,people)