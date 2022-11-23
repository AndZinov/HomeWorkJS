const goals = [8, 1, 1, 3, 2, -1, 5];

let maxNumberOfGoals = goals[0];
let maxNumberOfGoalsIndex = 0;

let minNumberOfGoals = goals[0];

goals.forEach((goalNumber, index) => {
  if (goalNumber > maxNumberOfGoals) {
    maxNumberOfGoals = goalNumber;
    maxNumberOfGoalsIndex = index;
  }
  if (goalNumber < minNumberOfGoals && goalNumber >= 0) {
    minNumberOfGoals = goalNumber;
  }
});

const matchesWithMinNumberOfGoals = goals
  .map((goalNumber, index) =>
    goalNumber === minNumberOfGoals ? index + 1 : -1
  )
  .filter((goalNumber) => goalNumber > 0)
  .join(", ");

alert(
  `Самый результативный матч был под номером ${
    maxNumberOfGoalsIndex + 1
  }. В нем было забито ${maxNumberOfGoals} гол(ов).`
);
alert(
  `Самые не результативные матчи были под номерами ${matchesWithMinNumberOfGoals}. В каждом из них было забито ${minNumberOfGoals} мяча(у).`
);

const numberOfGoalsPerSeason = goals.reduce((acc, goalNumber) => {
  return goalNumber >= 0 ? acc + goalNumber : acc;
}, 0);

alert(`Общее количество голов за сезон равно ${numberOfGoalsPerSeason}`);

const wereAutomaticLoses = goals.some((goalNumber) => goalNumber < 0);
if (wereAutomaticLoses) {
  alert("Были автоматические поражения: да");
} else {
  alert("Были автоматические поражения: нет");
}

const averageNumberOfGoalsPerMatch = numberOfGoalsPerSeason / goals.length;

alert(`Среднее количество голов за матч равно ${averageNumberOfGoalsPerMatch}`);

const ascendingOrderGoals = [...goals].sort((a, b) => a - b);

alert(ascendingOrderGoals.join(", "));