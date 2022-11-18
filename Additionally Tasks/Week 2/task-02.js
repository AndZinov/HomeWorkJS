const showSuccessMassage = (massage) => {
    console.log(massage);
}
const showErrorMassage = (massage) => {
    console.error(massage);
}
const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
    for ( let i = 0; i <= text.length; i ++){
        //Так я и не понял прикола в этом callback, я мог также прописать консоль лог тут и выводить это сообщение)
        
        if(!text.includes(errorSymbol)){
            successCallback('В данном тексте нет запрещенных символов')
            break
        } else if (text[i] === errorSymbol){
            errorCallback(`Найден запрещенный символ ${errorSymbol} под индексом ${i}`)
        }
    }
}
const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, 'а', showSuccessMassage, showErrorMassage);

