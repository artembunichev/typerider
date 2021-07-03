import { makeAutoObservable, runInAction } from 'mobx'
import { WordApi } from '../API/WordApi'

export class GameStore {
  constructor() {
    makeAutoObservable(this)
  }
  words = []
  currentWordIndex = 0
  currentLetterIndex = 0
  inputValue = ''
  isError = false

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
    this.inputValue = this.inputValue + value
  }
  clearInputValue() {
    this.inputValue = ''
  }
  setIsError(value) {
    this.isError = value
  }
  get currentWord() {
    return this.words[this.currentWordIndex]
  }
  get currentWordLength() {
    return this.words[this.currentWordIndex].length
  }
  get currentLetter() {
    return this.words[this.currentWordIndex][this.currentLetterIndex]
  }
}
