import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../../../stores/RootStore/RootStoreContext'

const SLetterBgcContainer = styled.div``
const SLetterInput = styled.input``

export const SLetterBgc = observer(() => {
  const { AppStore, GameSettingsStore } = useStore()

  const setBgcColor = (e) => {
    GameSettingsStore.setLetterBgcColor(e.target.value)
  }
  
  return (
    <SLetterBgcContainer>
      <SLetterInput
        type='color'
        disabled={AppStore.gameMode}
        onChange={setBgcColor}
        value={GameSettingsStore.letterBgcColor}
      />
    </SLetterBgcContainer>
  )
})
