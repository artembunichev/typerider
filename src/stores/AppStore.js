import { makeAutoObservable } from 'mobx'

export class AppStore {
  constructor() {
    makeAutoObservable(this)
  }
  onGamePage = false
  gameMode = false
  inputValue = ''
  userNickname = ''
  bestScore = 0
  gameHistory = []

  setOnGamePage(value) {
    this.onGamePage = value
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
