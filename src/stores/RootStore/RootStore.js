import { AppStore } from './../AppStore'
import { HistoryStore } from '../HistoryStore';

export class RootStore {
  AppStore = new AppStore()
  HistoryStore = new HistoryStore()
}
