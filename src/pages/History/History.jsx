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
  background-color: #e0e3e8;
`
const HistoryWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e0e3e8;
`
const HistoryTitle = styled.div`
  font-size: 48px;
  text-align: center;
  color: #ff820d;
  padding: 0 8px 8px 8px;
  background-color: #000000;
  border-radius: 0px 0px 7px 7px;
`
const NoGameHistory = styled.div`
  font-size: 32px;
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
      <HistoryTitle>
        <Bold>Your Game History</Bold>
      </HistoryTitle>
      {HistoryStore.gameHistory.length ? (
        <HistoryWrapper>
          <HistoryFilters />
          <GameList sortedHistory={sortedHistory} />
        </HistoryWrapper>
      ) : (
        <NoGameHistory>
          <Bold>Your game history is empty</Bold>
        </NoGameHistory>
      )}
    </HistoryContainer>
  )
})
