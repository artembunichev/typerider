import { GameSettingsStore } from '../GameSettingsStore'
import { GameStore } from '../GameStore'
import { AppStore } from './../AppStore'
import { ResultStore } from '../ResultStore'

export class RootStore {
  AppStore = new AppStore()
  GameStore = new GameStore()
  GameSettingsStore = new GameSettingsStore()
  ResultStore = new ResultStore(this.GameSettingsStore)
}
