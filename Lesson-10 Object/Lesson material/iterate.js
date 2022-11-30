const goodInfo = {
    id: 1,
    price: 80,
    currency: '$',
    name: 'shoes',
};

console.log('goodInfo', goodInfo)

//for in

for (const key in goodInfo){
    console.log('key1',key);
    const value = goodInfo[key];
    console.log(value);
} 

//Object.keys

const keys = Object.keys(goodInfo);
console.log('keys',keys)

//Object.values

const values = Object.values(goodInfo);
console.log('values', values)

//Object.entries

const entries = Object.entries(goodInfo);
console.log('entries', entries)
console.log(entries[0])

/* Object
  .entries(car)
  .forEach(([key, value]) => console.log(`${key}: ${value}`)); */