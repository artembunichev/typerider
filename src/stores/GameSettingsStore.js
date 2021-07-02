import { makeAutoObservable } from 'mobx'

export class GameSettingsStore {
  constructor() {
    makeAutoObservable(this)
  }
  gameMode = false
  timeForRace = [
    { label: '30sec', time: 30000, isActive: true },
    { label: '60sec', time: 60000, isActive: false },
    { label: '90sec', time: 90000, isActive: false },
  ]
  activeTimeForRace = null
  setGameMode(value) {
    this.gameMode = value
  }
  setSelectedTime(time) {
    this.timeForRace.forEach((t) => {
      if (t.time === time) {
        t.isActive = true
      } else {
        t.isActive = false
      }
    })
  }
}
