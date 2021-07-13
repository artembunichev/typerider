import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import { Bold } from '../Styled/StyledComponents'
import { useStore } from '../../stores/RootStore/RootStoreContext'

const HeaderContainer = styled.div`
  background-color: #161414;
  display: flex;
  justify-content: space-between;
  padding: 3px 22px 3px 22px;
`
const HeaderTitle = styled.span`
  font-family: 'Homemade Apple', cursive;
  font-size: 36px;
  color: #ff820d;
  user-select: none;
`
const HeaderExtraSection = styled.div`
  display: flex;
  align-items: center;
`
const BestScoreContainer = styled.span`
  color: #ff820d;
`
const HeaderButton = styled.button`
  font-size: 21px;
  background-color: #ff820d;
  color: #161414;
  border-radius: 6px;
  padding: 6px;
  &:hover {
    cursor: pointer;
  }
`

export const Header = observer(() => {
  const { AppStore } = useStore()
  const history = useHistory()

  const goToHistoryPage = () => {
    history.push('/history')
    AppStore.setUserNickname('')
  }
  const goToHomePage = () => {
    history.push('/')
  }
  return (
    <HeaderContainer>
      <HeaderTitle>typerider</HeaderTitle>
      <HeaderExtraSection>
        {AppStore.onHistoryPage ? (
          <HeaderButton onClick={goToHomePage}>
            <Bold>Start New Game</Bold>
          </HeaderButton>
        ) : AppStore.onPlayGamePage ? (
          <HeaderButton onClick={goToHomePage}>
            <Bold>Go To Main Page</Bold>
          </HeaderButton>
        ) : (
          <HeaderButton onClick={goToHistoryPage}>
            <Bold>Game History</Bold>
          </HeaderButton>
        )}
        <BestScoreContainer>Best Score : {AppStore.bestScore}</BestScoreContainer>
      </HeaderExtraSection>
    </HeaderContainer>
  )
})
