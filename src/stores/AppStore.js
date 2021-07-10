import { makeAutoObservable } from 'mobx'

export class AppStore {
  constructor() {
    makeAutoObservable(this)
  }
  
  inputValue = ''
  userNickname = ''
  bestScore = 0
  gameHistory = []

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
    this.gameHistory.push(game)
  }
}
