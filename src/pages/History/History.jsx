import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Container } from '../Components/Styled/StyledComponents'
import { GameList } from './GameList/GameList'
import { useStore } from '../../stores/RootStore/RootStoreContext'

const HistoryContainer = styled(Container)`
  background-color: #e7e7e7;
`
const HistoryTitle = styled.span``
export const History = () => {
  const { AppStore } = useStore()

  useEffect(() => {
    AppStore.setOnHistoryPage(true)
    return () => {
      AppStore.setOnHistoryPage(false)
    }
  }, [])

  return (
    <HistoryContainer>
      <HistoryTitle>Your Game History</HistoryTitle>
      <GameList />
    </HistoryContainer>
  )
}
