import { AppStore } from './../AppStore'
import { HistoryStore } from '../HistoryStore'
import { GameStore } from '../GameStore'
import { GameSettingsStore } from '../GameSettingsStore'
import autoBind from 'auto-bind'
import remotedev from 'mobx-remotedev'

export class RootStore {
  constructor() {
    autoBind(this)
  }
  AppStore = remotedev(new AppStore(), { name: 'AppStore' })
  HistoryStore = remotedev(new HistoryStore(), { name: 'HistoryStore' })
  GameSettingsStore = remotedev(new GameSettingsStore(), { name: 'GameSettingsStore' })
  createGameStore() {
    return remotedev(new GameStore(this.GameSettingsStore), { name: 'GameStore' })
  }
}
