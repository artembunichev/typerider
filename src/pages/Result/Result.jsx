import React from 'react'
import { useHistory } from 'react-router-dom'
import { useStore } from '../../stores/RootStore/RootStoreContext'

export const Results = () => {
  const { ResultStore } = useStore()
  const history = useHistory()

  if (!ResultStore.isResultReady) {
    history.push('/')
  }
  return <div className='results'>results</div>
}
