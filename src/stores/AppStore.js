import { makeAutoObservable } from 'mobx'

export class AppStore {
  constructor() {
    makeAutoObservable(this)
  }
  
  onHistoryPage = false
  onPlayGamePage = false
  gameMode = false
  userNickname = ''
  isAnyPopupOpen = false

  setOnPlayGamePage(value) {
    this.onPlayGamePage = value
  }
  setOnHistoryPage(value) {
    this.onHistoryPage = value
  }
  setGameMode(value) {
    this.gameMode = value
  }
  setUserNickname(nickname) {
    this.userNickname = nickname
  }
  setIsAnyPopupOpen(value) {
    this.isAnyPopupOpen = value
  }
}
