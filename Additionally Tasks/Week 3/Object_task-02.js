const heroPlayer = {
    name: 'Batman',
    health: 100,
 };
 const enemyPlayer = {
    name: 'Joker',
    health: 100,
 };

 const heatEnemy = (enemy) => {
        return enemy.health -= 10;
 }
 const heatHero = (hero) => {
    return hero.health -= 10;
}
const startGame = (hero, enemy) => {
    while (hero.health > 0 && enemy.health > 0){
        if (getRandomNumberInRange(0,1) === 0){
            heatHero(heroPlayer)
        }else if (getRandomNumberInRange(0,1) === 1){
            heatEnemy(enemyPlayer)
        }
    }
    hero.health > 0 
    ? alert(`${hero.name} победил! У него осталось ${hero.health} здоровья`)
    : alert(`${enemy.name} победил! У него осталось ${enemy.health} здоровья`)
};  

 function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

startGame(heroPlayer, enemyPlayer)