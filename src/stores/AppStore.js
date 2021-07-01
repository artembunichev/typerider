import { makeAutoObservable } from 'mobx'

export class AppStore {
  constructor() {
    makeAutoObservable(this)
  }
  inputValue = ''
  userNickname = ''
  bestScore = 0

  setInputValue(value) {
    this.inputValue = value
  }
  setUserNickname(nickname) {
    this.userNickname = nickname
  }
}
