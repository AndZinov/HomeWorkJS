const goals = [8, 1, 1, 3, 2, -1, 5]; 
console.log(...goals)
//1
//Создаю массив через мар, чтобы не изменять основной массив сортировкой
const arrayForSort = goals.map((item) =>{
    return item
})
// Сортирую массив, чтобы достать самый результативный матч
const sortUp = arrayForSort.sort((a,b) =>{
    return a - b;
})
// Вывожу номер через индексоф, чтобы выводить всегда самый первый результативный матч
alert(`Самый результативный матч был под номером ${goals.indexOf(sortUp[sortUp.length - 1]) + 1}. В нем было забито ${sortUp[sortUp.length - 1]} гол(ов).`);

//2
//Создаю пустой массив и в него добавляю индексы самых не результатывных матчей
let counter = [];
for(let i = 0; i < goals.length; i++){
    if(goals[i] <= 1 && goals[i] >= 0){
        counter.push(i + 1)
    }
}

alert(`Самые не результативные матчи были под номерами ${counter.join(', ')} . В каждом из них было забито по ${goals[counter[0]-1]} мячу(а).`)

//3
// Отфильтровываю по забитым мячам без поражений
const filterGoals = goals.filter((number) => number >= 0);
//Складываю все голы
const sumGoals = filterGoals.reduce((acc,goal) => {
    return acc + goal
},0)
alert(`Общее количество голов за сезон равно ${sumGoals}`)

//4
if (goals.includes(-1)){
    alert('Были автоматические поражения: да')
} else {
    alert('Были автоматические поражения: нет')
}

//5
const goalAverage = sumGoals / goals.length
alert(`Среднее количество голов за матч равно ${goalAverage}`)

//6
alert(`${sortUp.join(', ')}`)