class Car{
  constructor(carColor = "red", isThatCarSport = true, carMaxSpeed = 300){
    this.color = carColor
    this.isSport = isThatCarSport
    this.maxSpeed = carMaxSpeed
    this.wheels = 'round'
    
  }
  startCar(distance){
    if (distance <300){
      return 'The car starts succesfully'
    }else {
      return 'The car too far'
    }
  }
}
let myAudi = new Car(1, false,500)
console.log(myAudi.startCar(190));

let myBMV = new Car(2, false,300)
myBMV.wheels = 'square'
console.log(myBMV);
