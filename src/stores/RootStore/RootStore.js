import { GameSettingsStore } from '../GameSettingsStore'
import { GameStore } from '../GameStore'
import { AppStore } from './../AppStore'

export class RootStore {
  AppStore = new AppStore()
  GameStore = new GameStore()
  GameSettingsStore = new GameSettingsStore()
}
