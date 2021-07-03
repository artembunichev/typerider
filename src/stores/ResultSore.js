import { makeAutoObservable } from 'mobx'

export class ResultStore {
  constructor() {
    makeAutoObservable(this)
  }
  isResultReady = false
  errorsCount = 0
  errorWords = []

  updateErrorsCount() {
    this.errorsCount++
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
