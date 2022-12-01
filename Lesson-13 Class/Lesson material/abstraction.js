//Абстракция

class Footballer {
    constructor (name, club) {
        this.name = name;
        this.club = club;
    }
    shoot(){}
    celebrateGoal () {}
    pass() {}
}

class Forward extends Footballer {
    shoot (){
        console.log('Очень сильный удар')
    }
    celebrateGoal (){
        console.log('Да, я забил гол')
    }
    pass (){
        console.log('Слабый пас')
    }
}