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
    { label: 'sports car', src: SportsCar, isActive: true },
    { label: 'motorbike', src: Motorbike, isActive: false },
    { label: 'taxi', src: Taxi, isActive: false },
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
  setSelectedVehicle(src) {
    this.vehicles.forEach((vehicle) => {
      if (src === vehicle.src) {
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
  get activeVehicle() {
    const vehicleObject = this.vehicles.reduce((acc, time) => {
      if (time.isActive === true) {
        acc = time
      }
      return acc
    })
    return vehicleObject
  }
  get activeVehicleSrc() {
    return this.activeVehicle.src
  }
  get activeVehicleLabel() {
    return this.activeVehicle.label
  }
}
