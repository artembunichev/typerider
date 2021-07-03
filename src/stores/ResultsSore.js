import { makeAutoObservable } from 'mobx'

export class ResultStore {
  constructor() {
    makeAutoObservable(this)
  }
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
}
