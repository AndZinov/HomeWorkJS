const getDateFormat = (date,separator = '.') => {
    if (date.getDate() < 10 && date.getMonth() < 10){
        return console.log(`0${date.getDate()}${separator}0${date.getMonth() + 1}${separator}${date.getFullYear()}`)
    } else if (date.getDate() < 10){
        return console.log(`0${date.getDate()}${separator}${date.getMonth() + 1}${separator}${date.getFullYear()}`)
    }else if( date.getMonth() < 10){
        return console.log(`${date.getDate()}${separator}0${date.getMonth() + 1}${separator}${date.getFullYear()}`)
    } else{
        return console.log(`${date.getDate()}${separator}${date.getMonth() + 1}${separator}${date.getFullYear()}`)
    }
}
const dateNow = new Date();
getDateFormat(dateNow, '-')

/*
const addZero = (num) =>
  String(num).length === 1 ? `0${num}` : String(num);
  
const getDateFormat = (date, separator = ".") => {
    //для проверки является ли дата датой
  if (!(date instanceof Date)) {
    return "Первый параметр должен быть экземпляром класса Date!";
  }
  const dateItem = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return [dateItem, monthIndex + 1, year]
    .map(addZero)
    .join(separator);
};

console.log(getDateFormat(new Date())); */