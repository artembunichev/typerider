import { AppStore } from './../AppStore'
import { HistoryStore } from '../HistoryStore'
import { GameStore } from '../GameStore'
import { GameSettingsStore } from '../GameSettingsStore'
import autoBind from 'auto-bind'

export class RootStore {
  constructor() {
    autoBind(this)
  }
  AppStore = new AppStore()
  HistoryStore = new HistoryStore()
  GameSettingsStore = new GameSettingsStore()
  createGameStore() {
    return new GameStore(this.GameSettingsStore)
  }
}
