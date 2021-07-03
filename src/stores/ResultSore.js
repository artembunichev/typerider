import { makeAutoObservable } from 'mobx'

export class ResultStore {
  constructor() {
    makeAutoObservable(this)
  }
  isResultReady = false
  errorsNumber = 0
  errorWords = []

  updateErrorsNumber() {
    this.errorsNumber++
  }
  setErrorWords(word) {
    if (!this.errorWords.some((w) => w === word)) {
      this.errorWords.push(word)
    }
  }
  setIsResultReady(value) {
    this.isResultReady = value
  }
}
