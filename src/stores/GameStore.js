import { makeAutoObservable, runInAction } from 'mobx'
import { WordApi } from '../API/WordApi'
import SportsCar from '../images/Vehicle/sportsCar.svg'
import Motorbike from '../images/Vehicle/motorbike.svg'
import Taxi from '../images/Vehicle/taxi.svg'

export class GameStore {
  constructor() {
    makeAutoObservable(this)
  }
  words = []
  currentWordIndex = 0
  currentLetterIndex = 0

  inputValue = ''

  isError = false

  currentTime = null

  trackLength = 1120

  vehiclePosition = 0
  vehicleWidth = 50
  vehicles = [
    { label: 'sports car', src: SportsCar, isActive: true },
    { label: 'motorbike', src: Motorbike, isActive: false },
    { label: 'taxi', src: Taxi, isActive: false },
  ]

  setRandomWords(number) {
    WordApi.getRandomWords(number).then((words) => {
      runInAction(() => {
        this.words = words
      })
    })
  }
  updateCurrentWordIndex() {
    this.currentWordIndex++
  }
  updateCurrentLetterIndex() {
    this.currentLetterIndex++
  }
  clearCurrentLetterIndex() {
    this.currentLetterIndex = 0
  }
  updateInputValue(value) {
    this.inputValue += value
  }
  clearInputValue() {
    this.inputValue = ''
  }
  setIsError(value) {
    this.isError = value
  }
  setCurrentTime(time) {
    this.currentTime = time
  }
  updateCurrentTime() {
    this.currentTime--
  }
  updateVehiclePosition(value) {
    this.vehiclePosition += value
  }
  clearVehiclePosition() {
    this.vehiclePosition = 0
  }
  setActiveVehicle(src) {
    this.vehicles.forEach((vehicle) => {
      if (src === vehicle.src) {
        vehicle.isActive = true
      } else {
        vehicle.isActive = false
      }
    })
  }
  get currentWord() {
    return this.words[this.currentWordIndex]
  }
  get currentWordLength() {
    return this.currentWord.length
  }
  get currentLetter() {
    return this.currentWord[this.currentLetterIndex]
  }
  get currentWordStep() {
    return (this.trackLength - this.vehicleWidth) / this.currentWordLength
  }
}
