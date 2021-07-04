import { makeAutoObservable } from 'mobx'

export class ResultStore {
  constructor(gameSettingsStore) {
    this.GameSettingsStore = gameSettingsStore
    makeAutoObservable(this)
  }
  isResultReady = false
  errorsCount = 0
  errorWords = []
  symbolsCount = 0

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
  updateSymbolsCount() {
    this.symbolsCount++
  }
  get typeSpeed() {
    const rate = 60000 / this.GameSettingsStore.activeTimeForRace
    return (this.symbolsCount * rate).toFixed(1)
  }
  get errorsPercent() {
    return Math.floor((this.errorsCount / this.symbolsCount) * 100)
  }
}
