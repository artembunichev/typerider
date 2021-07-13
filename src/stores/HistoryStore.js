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
  activeFilter = 'date'

  updateGameHistory(game) {
    this.gameHistory.push(game)
  }
  setActiveFilter(filter) {
    this.activeFilter = filter
  }
}
