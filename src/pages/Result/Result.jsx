import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../stores/RootStore/RootStoreContext'

export const Results = observer(() => {
  const { ResultStore, GameStore } = useStore()
  const history = useHistory()

  useEffect(() => {
    console.log(GameStore.currentTime)
  })

  if (!ResultStore.isResultReady) {
    history.push('/')
  }
  return <div className='results'>results</div>
})
