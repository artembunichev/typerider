import { makeAutoObservable } from 'mobx'
import Motorbike from '../images/Vehicle/motorbike.svg'
import SportsCar from '../images/Vehicle/sportsCar.svg'
import Taxi from '../images/Vehicle/taxi.svg'
import randomWords from 'random-words'
import uniqid from 'uniqid'

export class GameStore {
  constructor() {
    globalThis = this
    makeAutoObservable(this)
  }
  //playGame
  PlayGameState = {
    words: [],
    currentWordIndex: 0,
    currentLetterIndex: 0,
    completedLetters: [],
    inputValue: '',
    isError: false,
    currentTime: null,
    trackLength: 1120,
    vehiclePosition: 0,
    vehicleWidth: 100,
    get currentWord() {
      return this.words[this.currentWordIndex]
    },
    get currentWordLetters() {
      if (this.words.length > 0) {
        return this.currentWord.split('').map((letter) => {
          return {
            letter,
            id: uniqid(),
          }
        })
      }
      return []
    },
    get currentWordLength() {
      return this.currentWord.length
    },
    get currentLetter() {
      return this.currentWord[this.currentLetterIndex]
    },
    get currentWordStep() {
      return (this.trackLength - this.vehicleWidth) / this.currentWordLength
    },
    get currentWordObject() {
      return {
        wordLetters: this.currentWordLetters,
        arrayOfCompletedLetters: this.completedLetters,
      }
    },

    setRandomWords() {
      this.words = randomWords(150)
    },
    updateCurrentWordIndex() {
      this.currentWordIndex++
    },
    updateCurrentLetterIndex() {
      this.currentLetterIndex++
    },
    clearCurrentLetterIndex() {
      this.currentLetterIndex = 0
    },
    updateInputValue(value) {
      this.inputValue += value
    },
    clearInputValue() {
      this.inputValue = ''
    },
    setIsError(value) {
      this.isError = value
    },
    setCurrentTime(time) {
      this.currentTime = time
    },
    updateCurrentTime() {
      this.currentTime--
    },
    updateVehiclePosition(value) {
      this.vehiclePosition += value
    },
    clearVehiclePosition() {
      this.vehiclePosition = 0
    },
    updateCompletedLetters(id) {
      this.completedLetters.push(id)
    },
  }
  //GameSettings
  GameSettingsState = {
    timeForRace: [
      { name: '30sec', time: 30000, isActive: true },
      { name: '60sec', time: 60000, isActive: false },
      { name: '90sec', time: 90000, isActive: false },
    ],
    vehicles: [
      { model: 'sports car', src: SportsCar, isActive: true },
      { model: 'motorbike', src: Motorbike, isActive: false },
      { model: 'taxi', src: Taxi, isActive: false },
    ],
    lettersColor: '#000000',
    completedLettersColor: '#ffffff',
    wordBorder: '#000000',
    letterBgcColor: '#33ffff',
    exampleWordLetters: [
      { letter: 't', id: uniqid() },
      { letter: 'y', id: uniqid() },
      { letter: 'p', id: uniqid() },
      { letter: 'e', id: uniqid() },
      { letter: 'r', id: uniqid() },
      { letter: 'i', id: uniqid() },
      { letter: 'd', id: uniqid() },
      { letter: 'e', id: uniqid() },
      { letter: 'r', id: uniqid() },
    ],
    get activeTimeForRace() {
      const timeObject = this.timeForRace.reduce((acc, time) => {
        if (time.isActive === true) {
          acc = time
        }
        return acc
      })
      return timeObject.time
    },
    get activeVehicle() {
      const vehicleObject = this.vehicles.reduce((acc, vehicle) => {
        if (vehicle.isActive === true) {
          acc = vehicle
        }
        return acc
      })
      return vehicleObject
    },
    get activeVehicleSrc() {
      return this.activeVehicle.src
    },
    get activeVehicleModel() {
      return this.activeVehicle.model
    },
    get exmapleCompletedLetters() {
      const completedLetters = this.exampleWordLetters.reduce((acc, letter, index) => {
        if (index < 4) {
          acc.push(letter.id)
        }
        return acc
      }, [])
      return completedLetters
    },
    get exampleWordObject() {
      return {
        wordLetters: this.exampleWordLetters,
        arrayOfCompletedLetters: this.exmapleCompletedLetters,
      }
    },

    setSelectedTime(time) {
      this.timeForRace.forEach((t) => {
        if (t.time === time) {
          t.isActive = true
        } else {
          t.isActive = false
        }
      })
    },
    setSelectedVehicle(src) {
      this.vehicles.forEach((vehicle) => {
        if (src === vehicle.src) {
          vehicle.isActive = true
        } else {
          vehicle.isActive = false
        }
      })
    },
    setLettersColor(color) {
      this.lettersColor = color
    },
    setCompletedLettersColor(color) {
      this.completedLettersColor = color
    },
    setWordBorder(color) {
      this.wordBorder = color
    },
    setLetterBgcColor(color) {
      this.letterBgcColor = color
    },
  }
  //result
  ResultState = {
    isResultReady: false,
    errorsCount: 0,
    errorWords: [],
    symbolsCount: 0,
    correctWordsCount: 0,
    get typeSpeed() {
      const rate = 60000 / globalThis.GameSettingsState.activeTimeForRace //!ACTIVETIMEFORRACE
      return Math.round(this.symbolsCount * rate)
    },
    get errorsPercent() {
      return Math.floor((this.errorsCount / this.symbolsCount) * 100)
    },

    updateErrorsCount() {
      this.errorsCount++
    },
    setErrorWords(word) {
      if (!this.errorWords.some((w) => w === word)) {
        this.errorWords.push(word)
      }
    },
    setIsResultReady(value) {
      this.isResultReady = value
    },
    updateSymbolsCount() {
      this.symbolsCount++
    },
    updateCorrectWordsCount() {
      this.correctWordsCount++
    },
  }
}
