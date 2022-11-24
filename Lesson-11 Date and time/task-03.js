const addDays = (date, days) => {
    return new Date (date + convertDaysToMs(days));
}

const convertDaysToMs = days => days * 3600000 * 24
const dateNow = Date.now();

console.log(addDays(dateNow, 258))