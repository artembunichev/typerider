import { makeAutoObservable } from 'mobx'
import randomWords from 'random-words'
import uniqid from 'uniqid'

export class GameStore {
  constructor(gameSettingsStore) {
    globalThis = this
    makeAutoObservable(this)
    this.GameSettingsStore = gameSettingsStore
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

  //result
  ResultState = {
    isResultReady: false,
    errorsCount: 0,
    errorWords: [],
    symbolsCount: 0,
    correctWordsCount: 0,
    get typeSpeed() {
      const rate = 60000 / globalThis.GameSettingsStore.activeTimeForRace
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
