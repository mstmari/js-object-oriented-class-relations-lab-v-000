
let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name

     return store.drivers.push(this)

  }
  trips(){
    return store.trips.filter(item => {
      return item.driverId === this.id
    })
}
  passengers(){
    return this.trips().map(trip => {
      return trip.passenger()
    })
  }
}

class Passenger {
  constructor(name){
    this.name = name
    this.id = ++passengerId

    return store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(item => {
      return item.passengerId === this.id
    })
  }
  drivers(){
    return this.trips().map(trip => {
      return trip.driver();
    })
  }
}


class Trip {
  constructor(driver, passenger, secondPassenger){
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.secondPassenger = secondPassenger
    this.id = ++tripId

    return store.trips.push(this)
  }
  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }

  passenger(){
      return store.passengers.find(passenger => {
        return passenger.id === this.passengerId
    })
  }

}
