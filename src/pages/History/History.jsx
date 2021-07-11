import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Container } from '../Components/Styled/StyledComponents'
import { GameList } from './GameList/GameList'
import { useStore } from '../../stores/RootStore/RootStoreContext'
import { HistoryFilters } from './HistoryFilters/HistoryFilters'
import { observer } from 'mobx-react-lite'

const HistoryContainer = styled(Container)`
  background-color: #e7e7e7;
`
const HistoryTitle = styled.span``

export const History = observer(() => {
  const { AppStore, HistoryStore } = useStore()

  useEffect(() => {
    AppStore.setOnHistoryPage(true)
    return () => {
      AppStore.setOnHistoryPage(false)
    }
  }, [])

  const filter = HistoryStore.activeFilter
  const sortedHistory = HistoryStore.gameHistory.slice().sort((a, b) => {
    if (filter === 'errorsCount') {
      return a[filter] - b[filter]
    }
    return b[filter] - a[filter]
  })
  return (
    <HistoryContainer>
      <HistoryTitle>Your Game History</HistoryTitle>
      <HistoryFilters />
      <GameList sortedHistory={sortedHistory} />
    </HistoryContainer>
  )
})
