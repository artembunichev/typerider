import { makeAutoObservable } from 'mobx'

export class GameSettingsStore {
  constructor() {
    makeAutoObservable(this)
  }
  gameMode = false
  setGameMode(value) {
    this.gameMode = value
  }
}
