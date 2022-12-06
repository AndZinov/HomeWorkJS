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

class HardWordsDictionary extends Dictionary {
    constructor(name){
        super(name)
    }
    add (word,description,isDifficult = true) {
        if(Object.keys(this.words).includes(word)) {
            console.log('Слово уже добавлено в словарь')
        } else {
        this.words[word] = {};
        const newWord = this.words[word];
        newWord.word = word;
        newWord.description = description;
        newWord.isDifficult = isDifficult;
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
console.log(hardWordsDictionary)

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
console.log(hardWordsDictionary)
    
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
    
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.'); 
    
hardWordsDictionary.remove('неологизм');
    
hardWordsDictionary.showAllWords();


/* Решение от школы
class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }

  add(word, description) {
    if (!this.words[word]) {
      this.words[word] = {
        word,
        description
      };
    }
  }

  remove(word) {
    delete this.words[word];
  }

  get(word) {
    return this.words[word];
  }

  showAllWords() {
    Object.values(this.words).forEach((wordItem) => {
      console.log(`${wordItem.word} - ${wordItem.description}`);
    });
  }
}

class HardWordsDictionary extends Dictionary {
  add(word, description) {
    if (!this.words[word]) {
      this.words[word] = {
        word,
        description,
        isDifficult: true
      };
    }
  }
}


*/