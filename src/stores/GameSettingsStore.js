import { makeAutoObservable } from 'mobx'
import Motorbike from '../images/Vehicle/motorbike.svg'
import SportsCar from '../images/Vehicle/sportsCar.svg'
import Taxi from '../images/Vehicle/taxi.svg'
export class GameSettingsStore {
  constructor() {
    makeAutoObservable(this)
  }
  gameMode = false
  timeForRace = [
    { label: '30sec', time: 30000, isActive: true },
    { label: '60sec', time: 60000, isActive: false },
    { label: '90sec', time: 90000, isActive: false },
  ]
  vehicles = [
    { label: 'sports car', url: SportsCar, isActive: true },
    { label: 'motorbike', url: Motorbike, isActive: false },
    { label: 'taxi', url: Taxi, isActive: false },
  ]
  setGameMode(value) {
    this.gameMode = value
  }
  setSelectedTime(time) {
    this.timeForRace.forEach((t) => {
      if (t.time === time) {
        t.isActive = true
      } else {
        t.isActive = false
      }
    })
  }
  setActiveVehicle(url) {
    this.vehicles.forEach((vehicle) => {
      if (url === vehicle.url) {
        vehicle.isActive = true
      } else {
        vehicle.isActive = false
      }
    })
  }
  get activeTimeForRace() {
    const timeObject = this.timeForRace.reduce((acc, time) => {
      if (time.isActive === true) {
        acc = time
      }
      return acc
    })
    return timeObject.time
  }
}
