import React from 'react'
import styled from 'styled-components'
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
const TimeForRaceContainer = styled.div``
const TimeForRace = styled.ul``
const TimeForRaceItem = styled.li`
  color: ${(props) => (props.active ? '#33ff00' : '#000000')};
  &:hover {
    cursor: pointer;
  }
`

export const GameSettings = observer(() => {
  const { GameSettingsStore } = useStore()
  const onStartClick = () => {
    GameSettingsStore.setGameMode(true)
  }
  const setSelectedTime = (time) => {
    GameSettingsStore.setSelectedTime(time)
  }
  return (
    <GameSettingsContainer>
      <TimeForRaceContainer>
        How long will your race last?
        <TimeForRace>
          {GameSettingsStore.timeForRace.map((t) => {
            return (
              <TimeForRaceItem active={t.isActive} key={t.time} onClick={() => setSelectedTime(t.time)}>
                {t.label}
              </TimeForRaceItem>
            )
          })}
        </TimeForRace>
      </TimeForRaceContainer>
      <Start onClick={onStartClick}>Start Game</Start>
    </GameSettingsContainer>
  )
})
