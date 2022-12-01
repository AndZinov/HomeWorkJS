class CarService{
    static DefaultWorkingHours = {
        from: '9:00', 	
        till: '17:00',
      }

    constructor(name, workingHours) {
        this.name = name;
        this.workingHours = workingHours || CarService.DefaultWorkingHours
    }
    repairCar(carName) {
        let timeNow = new Date().getHours();
        const {from, till} = this.workingHours;
        const tillNumber = Number(till.split(':')[0])
        const fromNumber = Number(from.split(':')[0])
        if(!carName){
            console.error('Вам необходимо указать название машины, чтобы ее отремонтировать')
        } else if (fromNumber < timeNow && tillNumber > timeNow){
            alert (`Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`)
        } else {
            alert('К сожалению, мы сейчас закрыты. Приходите завтра')
        }
    }
}
const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');
