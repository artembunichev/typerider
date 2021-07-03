import { GameSettingsStore } from '../GameSettingsStore'
import { GameStore } from '../GameStore'
import { AppStore } from './../AppStore'
import { ResultStore } from '../ResultsSore'

export class RootStore {
  AppStore = new AppStore()
  GameStore = new GameStore()
  GameSettingsStore = new GameSettingsStore()
  ResultsStore = new ResultStore()
}
