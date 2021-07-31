import { makeAutoObservable } from 'mobx'
import Motorbike from '../assets/images/vehicle/motorbike.svg'
import SportsCar from '../assets/images/vehicle/sportsCar.svg'
import Taxi from '../assets/images/vehicle/taxi.svg'
import uniqid from 'uniqid'

export class GameSettingsStore {
  constructor() {
    makeAutoObservable(this)
  }

  timeForRace = [
    { name: '30 sec', time: 30000, isActive: true },
    { name: '60 sec', time: 60000, isActive: false },
    { name: '90 sec', time: 90000, isActive: false },
  ]
  vehicles = [
    { model: 'sports car', src: SportsCar, isActive: true },
    { model: 'motorbike', src: Motorbike, isActive: false },
    { model: 'taxi', src: Taxi, isActive: false },
  ]
  lettersColor = '#ffffff'
  completedLettersColor = '#ff820d'
  wordBorder = '#000000'
  letterBgcColor = '#000000'
  exampleWordLetters = [
    { letter: 't', id: uniqid() },
    { letter: 'y', id: uniqid() },
    { letter: 'p', id: uniqid() },
    { letter: 'e', id: uniqid() },
    { letter: 'r', id: uniqid() },
    { letter: 'i', id: uniqid() },
    { letter: 'd', id: uniqid() },
    { letter: 'e', id: uniqid() },
    { letter: 'r', id: uniqid() },
  ]
  get activeTimeForRace() {
    const timeObject = this.timeForRace.reduce((acc, time) => {
      if (time.isActive === true) {
        acc = time
      }
      return acc
    })
    return timeObject.time
  }
  get activeTimeForRaceInSeconds() {
    return this.activeTimeForRace / 1000
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
  get exmapleCompletedLetters() {
    const completedLetters = this.exampleWordLetters.reduce((acc, letter, index) => {
      if (index < 4) {
        acc.push(letter.id)
      }
      return acc
    }, [])
    return completedLetters
  }
  get exampleWordObject() {
    return {
      wordLetters: this.exampleWordLetters,
      arrayOfCompletedLetters: this.exmapleCompletedLetters,
    }
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
  setLetterBgcColor(color) {
    this.letterBgcColor = color
  }
}
