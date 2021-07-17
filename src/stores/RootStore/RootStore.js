import { AppStore } from './../AppStore'
import { HistoryStore } from '../HistoryStore'
import { GameStore } from '../GameStore'

export class RootStore {
  AppStore = new AppStore()
  HistoryStore = new HistoryStore()
  createGameStore() {
    return new GameStore()
  }
}
