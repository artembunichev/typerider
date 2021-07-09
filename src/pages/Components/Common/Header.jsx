import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../../../stores/RootStore/RootStoreContext'

const HeaderContainer = styled.div`
  background-color: #161414;
  text-align: left;
  padding: 3px 0px 3px 22px;
`
const HeaderTitle = styled.span`
  font-family: 'Homemade Apple', cursive;
  font-size: 36px;
  color: #ff820d;
  user-select: none;
`
const BestScoreContainer = styled.span`
  color: #ff820d;
`

export const Header = observer(() => {
  const { AppStore } = useStore()
  return (
    <HeaderContainer>
      <HeaderTitle>typerider</HeaderTitle>
      <BestScoreContainer>Best Score : {AppStore.bestScore}</BestScoreContainer>
    </HeaderContainer>
  )
})
