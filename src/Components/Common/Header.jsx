import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import { Bold } from '../Styled/StyledComponents'
import { useStore } from '../../stores/RootStore/RootStoreContext'

const HeaderContainer = styled.div`
  z-index: 1;
  background-color: #384653;
  display: flex;
  justify-content: space-between;
  padding: 3px 22px 3px 22px;
  box-shadow: 0px 7px 9px 0px rgba(0, 46, 54, 0.65);
  @media (max-width: 470px) {
    padding: 3px 13px 3px 13px;
  }
`
const HeaderTitle = styled.span`
  font-family: 'Homemade Apple', cursive;
  @media (max-width: 650px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 25px;
  }
  @media (max-width: 470px) {
    font-size: 22px;
  }
  @media (max-width: 405px) {
    font-size: 20px;
  }
  @media (max-width: 370px) {
    font-size: 16px;
  }
  font-size: 36px;
  color: #ff820d;
  user-select: none;
`
const HeaderExtraSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`
const BestScoreContainer = styled.span`
  @media (max-width: 470px) {
    font-size: 14.5px;
  }
  @media (max-width: 370px) {
    font-size: 12px;
  }
  font-size: 19px;
  color: #ff820d;
`
const HeaderButton = styled.button`
  @media (max-width: 650px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
    padding: 3px;
  }
  @media (max-width: 405px) {
    margin-right: 10px;
    font-size: 13.5px;
  }
  @media (max-width: 370px) {
    font-size: 12px;
  }
  font-size: 21px;
  background-color: #ff820d;
  color: #161414;
  border-radius: 6px;
  padding: 6px;
  margin-right: 14px;
  &:hover {
    cursor: pointer;
  }
`

export const Header = observer(() => {
  const { AppStore, HistoryStore } = useStore()

  const history = useHistory()

  const goToHistoryPage = () => {
    history.push('/history')
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
        <BestScoreContainer>Best Score : {HistoryStore.bestScore}</BestScoreContainer>
      </HeaderExtraSection>
    </HeaderContainer>
  )
})
