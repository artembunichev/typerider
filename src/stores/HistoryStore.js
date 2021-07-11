import { makeAutoObservable } from "mobx"

export class HistoryStore {
  constructor(){
    makeAutoObservable(this)
  }

  gameHistory = []

  updateGameHistory(game) {
    const gameWithDate = {
      ...game,
      date: new Date().getTime(),
    }
    this.gameHistory.push(gameWithDate)
  }
}