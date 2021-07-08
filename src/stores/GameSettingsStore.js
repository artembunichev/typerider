import { makeAutoObservable } from 'mobx'
import Motorbike from '../images/Vehicle/motorbike.svg'
import SportsCar from '../images/Vehicle/sportsCar.svg'
import Taxi from '../images/Vehicle/taxi.svg'
import uniqid from 'uniqid'

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
    { model: 'sports car', src: SportsCar, isActive: true },
    { model: 'motorbike', src: Motorbike, isActive: false },
    { model: 'taxi', src: Taxi, isActive: false },
  ]
  lettersColor = '#000000'
  completedLettersColor = '#ffffff'
  wordBorder = '#000000'

  exampleWord = [
    { letter: 't', isCompleted: true, id: uniqid() },
    { letter: 'y', isCompleted: true, id: uniqid() },
    { letter: 'p', isCompleted: true, id: uniqid() },
    { letter: 'e', isCompleted: true, id: uniqid() },
    { letter: 'r', isCompleted: false, id: uniqid() },
    { letter: 'i', isCompleted: false, id: uniqid() },
    { letter: 'd', isCompleted: false, id: uniqid() },
    { letter: 'e', isCompleted: false, id: uniqid() },
    { letter: 'r', isCompleted: false, id: uniqid() },
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
  setLettersColor(color) {
    this.lettersColor = color
  }
  setCompletedLettersColor(color) {
    this.completedLettersColor = color
  }
  setWordBorder(color) {
    this.wordBorder = color
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
    const vehicleObject = this.vehicles.reduce((acc, vehicle) => {
      if (vehicle.isActive === true) {
        acc = vehicle
      }
      return acc
    })
    return vehicleObject
  }
  get activeVehicleSrc() {
    return this.activeVehicle.src
  }
  get activeVehicleModel() {
    return this.activeVehicle.model
  }
}
