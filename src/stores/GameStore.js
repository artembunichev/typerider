import { makeAutoObservable, runInAction } from 'mobx'
import { WordApi } from '../API/WordApi'

export class GameStore {
  constructor() {
    makeAutoObservable(this)
  }
  words = []

  setRandomWords(number) {
    WordApi.getRandomWords(number).then((words) => {
      runInAction(() => {
        this.words = words
      })
    })
  }
}
