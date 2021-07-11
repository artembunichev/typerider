import { makeAutoObservable } from 'mobx'

export class AppStore {
  constructor() {
    makeAutoObservable(this)
  }
  onHistoryPage = false
  onPlayGamePage = false

  gameMode = false
  inputValue = ''
  userNickname = ''
  bestScore = 0
  gameHistory = []

  setOnPlayGamePage(value) {
    this.onPlayGamePage = value
  }
  setOnHistoryPage(value) {
    this.onHistoryPage = value
  }
  setGameMode(value) {
    this.gameMode = value
  }
  setInputValue(value) {
    this.inputValue = value
  }
  setUserNickname(nickname) {
    this.userNickname = nickname
  }
  updateBestScore(score) {
    this.bestScore = score
  }
  updateGameHistory(game) {
    const gameWithDate = {
      ...game,
      date: new Date().getTime(),
    }
    this.gameHistory.push(gameWithDate)
  }
}
