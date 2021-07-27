import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext';

const TimeForRaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TimeForRaceList = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
`
const TimeForRaceItem = styled.button`
  width: 50px;
  color: ${(props) => (props.active ? '#33ff00' : '#000000')};
  &:hover {
    cursor: pointer;
  }
`

export const TimeForRace = observer(() => {
  const { AppStore, GameSettingsStore } = useStore()

  const setSelectedTime = (time) => {
    GameSettingsStore.setSelectedTime(time)
  }
  const TimeForRaceItems = GameSettingsStore.timeForRace.map((t) => {
    return (
      <TimeForRaceItem
        disabled={AppStore.gameMode}
        active={t.isActive}
        key={t.time}
        onClick={() => setSelectedTime(t.time)}>
        {t.name}
      </TimeForRaceItem>
    )
  })

  return (
    <TimeForRaceContainer>
      How long will your race last?
      <TimeForRaceList>{TimeForRaceItems}</TimeForRaceList>
    </TimeForRaceContainer>
  )
})
