class Dictionary {
    constructor (name){
        this.name = name
        this.words = {}
        
    }
    add (word, description) {
        if(Object.keys(this.words).includes(word)) {
            console.log('Слово уже добавлено в словарь')
        } else {
        this.words[word] = {};
        const newWord = this.words[word];
        newWord.word = word;
        newWord.description = description;
        }
    }
    remove (wordForDelete) {
        delete this.words[wordForDelete]
    }
    get (wordNeedFind) {
        console.log(this.words[wordNeedFind])
    }
    showAllWords (){
        for (const key in this.words){
            const value = this.words[key].description;
            console.log(`${key} - ${value}`);
        }
    }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
// dictionary.remove('JavaScript');
// dictionary.get('JavaScript');
dictionary.showAllWords(); 