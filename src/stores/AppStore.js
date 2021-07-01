import { makeAutoObservable } from 'mobx'

export class AppStore {
  constructor() {
    makeAutoObservable(this)
  }
  userNickname = ''
  bestScore = ''

  setUserNickname (nickname) {
    this.userNickname = nickname
  }
}
