import React from 'react'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../stores/RootStore/RootStoreContext'

export const Results = observer(() => {
  const { ResultStore } = useStore()
  const history = useHistory()

  if (!ResultStore.isResultReady) {
    history.push('/')
  }
  return <div className='results'>results</div>
})
