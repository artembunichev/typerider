import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Bold, Container } from '../../Components/Styled/StyledComponents'
import { GameList } from './GameList/GameList'
import { HistoryFilters } from './HistoryFilters/HistoryFilters'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../stores/RootStore/RootStoreContext'

const HistoryContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e7e7e7;
`
const HistoryWrapper = styled.div`
  width: 1000px;
  background-color: #e7e7e7;
`
const HistoryTitle = styled.div`
  font-size: 42px;
  text-align: center;
`

export const History = observer(() => {
  const { AppStore, HistoryStore } = useStore()

  useEffect(() => {
    AppStore.setOnHistoryPage(true)
    return () => {
      AppStore.setOnHistoryPage(false)
    }
  }, [])

  const filter = HistoryStore.activeFilterValue
  const sortedHistory = HistoryStore.gameHistory.slice().sort((a, b) => {
    if (filter === 'errorsCount') {
      return a[filter] - b[filter]
    }
    return b[filter] - a[filter]
  })
  return (
    <HistoryContainer>
      <HistoryWrapper>
        <HistoryTitle>
          <Bold>Your Game History</Bold>
        </HistoryTitle>
        <HistoryFilters />
        <GameList sortedHistory={sortedHistory} />
      </HistoryWrapper>
    </HistoryContainer>
  )
})
