import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../../../stores/RootStore/RootStoreContext'
import { useHistory } from 'react-router-dom'
import { Bold } from '../Styled/StyledComponents'

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
const GoToHistory = styled.button`
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

  const goToHistory = () => {
    history.push('/history')
  }
  return (
    <HeaderContainer>
      <HeaderTitle>typerider</HeaderTitle>
      <HeaderExtraSection>
        <GoToHistory onClick={goToHistory}>
          <Bold>Game History</Bold>
        </GoToHistory>
        <BestScoreContainer>Best Score : {AppStore.bestScore}</BestScoreContainer>
      </HeaderExtraSection>
    </HeaderContainer>
  )
})
