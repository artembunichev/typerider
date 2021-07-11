import { makeAutoObservable } from 'mobx'

export class HistoryStore {
  constructor() {
    makeAutoObservable(this)
  }

  gameHistory = []

  filters = [
    { name: 'By type speed', filter: 'typeSpeed' },
    { name: 'By date', filter: 'date' },
    { name: 'By errors count', filter: 'errorsCount' },
  ]
  activeFilter = 'date'

  updateGameHistory(game) {
    const gameWithDate = {
      ...game,
      date: new Date().getTime(),
    }
    this.gameHistory.push(gameWithDate)
  }
  setActiveFilter(filter) {
    this.activeFilter = filter
  }
}
