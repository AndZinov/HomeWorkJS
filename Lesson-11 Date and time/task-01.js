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

