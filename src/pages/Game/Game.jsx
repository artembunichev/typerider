import React from 'react'
import { useHistory } from 'react-router-dom'
import { useStore } from '../../stores/RootStore/RootStoreContext'

export const Game = () => {
  const { AppStore } = useStore()
  const history = useHistory()
  if (AppStore.userNickname === '') {
    history.push('/')
  }
  return <h1>game</h1>
}
