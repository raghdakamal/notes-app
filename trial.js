const car ={
    name  : 'BMW',
    color : 'black'

}
console.log(car.name);

const carJson=JSON.stringify(car)


const carObject=JSON.parse(carJson)
console.log(carObject)
console.log(carObject.color)