class Dictionary {
    #name
    #words

    constructor (name){
        this.#name = name
        this.#words = {}
        console.log(this)
              
    }

    get mainName() {
        return this.#name
    }

    set mainName(name) {
        return this.#name = name
    }

    get allWord() {
        return this.#words
    }

    

    add (word, description) {
        if(Object.keys(this.allWord).includes(word)) {
            console.log('Слово уже добавлено в словарь')
        } else {
            //Cоздаем переменную, куда помещаем путь к скрытым ключам
            const getWords = this.allWord
            //Создаем ключ со словом в скрытом поле 
            this.#words[word] = 0;
            //Создаем объект, который потом передадим в функцию
            const wordIsObj = {}
            wordIsObj.word = word;
            wordIsObj.description = description;
            //Создаем функцию из задания, зачем она нужна, я так и не понял, может неправильный подход к решению
            function _addNewWord (wordKey, wordObj) {
                return getWords[wordKey] = wordObj 
            }
            //Возвращаем результат работы функции
            return _addNewWord(word, wordIsObj)
        }
    }

    remove (wordForDelete) {
        delete this.#words[wordForDelete]
    }
    get (wordNeedFind) {
        console.log(this.allWord[wordNeedFind])
    }
    showAllWords (){
        for (const key in this.#words){
            const value = this.#words[key].description;
            console.log(`${key} - ${value}`);
        }
    }
}

class HardWordsDictionary extends Dictionary {

    add (word,description,isDifficult = true) {
        if(Object.keys(this.allWord).includes(word)) {
            console.log('Слово уже добавлено в словарь')
        } else {
            //Cоздаем переменную, куда помещаем путь к скрытым ключам
            const getWords = this.allWord
            //Создаем ключ со словом в скрытом поле 
            getWords[word] = 0;
            //Создаем объект, который потом передадим в функцию
            const wordIsObj = {}
            wordIsObj.word = word;
            wordIsObj.description = description;
            wordIsObj.isDifficult = isDifficult;
            //Создаем функцию из задания, зачем она нужна, я так и не понял, может неправильный подход к решению
            function _addNewWord (wordKey, wordObj) {
                return getWords[wordKey] = wordObj 
            }
            //Возвращаем результат работы функции
            //console.log(_addNewWord(word, wordIsObj))
            return _addNewWord(word, wordIsObj)
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
    
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
    
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
    
hardWordsDictionary.remove('неологизм');

//console.log(hardWordsDictionary.allWord)
    
// hardWordsDictionary.showAllWords();
    
console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWord); // выводит объект в котором есть слова 