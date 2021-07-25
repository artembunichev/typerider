import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

export class HistoryStore {
  constructor() {
    makeAutoObservable(this)
    makePersistable(this, { name: 'HistoryStore', properties: ['gameHistory'], storage: window.localStorage })
  }

  gameHistory = []

  filters = [
    { name: 'By type speed', filter: 'typeSpeed' },
    { name: 'By date', filter: 'date' },
    { name: 'By errors count', filter: 'errorsCount' },
  ]

  activeFilter = { name: 'By date', filter: 'date' }

  updateGameHistory(game) {
    this.gameHistory.push(game)
  }
  setActiveFilter(filter) {
    this.activeFilter = filter
  }
  clearHistory() {
    this.gameHistory = []
  }
  deleteCurrentGame(gameDate) {
    this.gameHistory = this.gameHistory.filter((game) => game.date !== gameDate)
  }

  get activeFilterValue() {
    return this.activeFilter.filter
  }
  get activeFilterName() {
    return this.activeFilter.name
  }
  get bestScore() {
    if (this.gameHistory.length) {
      return this.gameHistory.reduce((bestScore, game) => {
        if (game.typeSpeed > bestScore) {
          bestScore = game.typeSpeed
        }
        return bestScore
      }, 0)
    }
    return 0
  }
}
