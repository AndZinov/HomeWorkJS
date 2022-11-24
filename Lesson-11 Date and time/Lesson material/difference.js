// getTime

const date1 = new Date(2005, 4, 20);
const date2 = new Date (2006, 4, 10);


// количество мс с Jan 1, 1970
console.log('date1', date1.getTime());
console.log('date2', date2.getTime());


const difference = date2.getTime() - date1.getTime();
console.log('difference', difference / 1000 / 60);


const startTime = Date.now();

for (let i = 0; i < 100000000; i ++){
    //do somethig
}

const endTime = Date.now();
console.log('startTime',startTime);
console.log('endTime',endTime);

const difference2 = endTime - startTime;
console.log('difference2' ,difference2)
