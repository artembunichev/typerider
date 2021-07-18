import { makeAutoObservable } from 'mobx'
// import { makePersistable } from 'mobx-persist-store'

export class HistoryStore {
  constructor() {
    makeAutoObservable(this)
    // makePersistable(this, { name: 'HistoryStore', properties: ['gameHistory'], storage: window.localStorage })
  }

  gameHistory = [
    {
      correctWordsCount: 1,
      date: 1626197504109,
      errorsCount: 12,
      raceTime: 30,
      typeSpeed: 10,
      userNickname: '123',
      vehicle: '/static/media/sportsCar.d9e9193c.svg',
    },
    {
      correctWordsCount: 14,
      date: 16261344709,
      errorsCount: 3,
      raceTime: 60,
      typeSpeed: 10,
      userNickname: 'spleekz',
      vehicle: '/static/media/motorbike.2a6f0296.svg',
    },
    {
      correctWordsCount: 14,
      date: 1626123409,
      errorsCount: 3,
      raceTime: 60,
      typeSpeed: 10,
      userNickname: 'spleekz',
      vehicle: '/static/media/motorbike.2a6f0296.svg',
    },
    {
      correctWordsCount: 14,
      date: 1626197504709,
      errorsCount: 3,
      raceTime: 60,
      typeSpeed: 10,
      userNickname: 'spleekz',
      vehicle: '/static/media/motorbike.2a6f0296.svg',
    },
  ]

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
}
