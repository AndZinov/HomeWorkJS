const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin (defenderObject) {
        //Создаем массив для подсчета шансов и добавляем в первый индекс шансы
        let chance = [];
        chance[0] = onlyMilitary(this).reduce((acc, key) => {
            if (this[key] > defenderObject[key]) {
                acc += 1  
            } 
            return acc
        },0)
        chance.push(onlyMilitary(this).length)
        return chance
    },
    improveArmy() {
        return onlyMilitary(this).forEach((key) => {
            this[key] += 5;
        })
    },
    attack(defender) {
        const [fist, second] = this.checkChancesToWin(defender);
        if((fist / second * 100) < 70) {
            attacker.improveArmy.call(this)
            alert(`Наши шансы равны ${fist}/ ${second}. Необходимо укрепление!`)
        } else {
            alert(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`)
        }
    }

 }

 const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
 }
 
//Функция для создания массива с боевыми единицами
const onlyMilitary = (object) => Object.keys(object).filter(key => typeof object[key] !== 'function')
 

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление! 
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление! 
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!