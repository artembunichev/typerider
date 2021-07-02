import React from 'react'
import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../stores/RootStore/RootStoreContext'
import { Container } from '../../StyledComponents/StyledComponents'

const GameSettingsContainer = styled(Container)`
  background-color: #ff0000;
`
const Start = styled.button`
  width: 150px;
  height: 45px;
`

export const GameSettings = observer(() => {
  const { GameSettingsStore } = useStore()
  const onStartClick = () => {
    GameSettingsStore.setGameMode(true)
  }
  return (
    <GameSettingsContainer>
      <Start onClick={onStartClick}>Start Game</Start>
    </GameSettingsContainer>
  )
})
