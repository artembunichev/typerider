import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../../../stores/RootStore/RootStoreContext'

const SLetterBgcContainer = styled.div``
const SLetterInput = styled.input``

export const SLetterBgc = observer(() => {
  const { GameSettingsStore } = useStore()

  const setBgcColor = (e) => {
    GameSettingsStore.setLetterBgcColor(e.target.value)
  }
  return (
    <SLetterBgcContainer>
      <SLetterInput
        type='color'
        disabled={GameSettingsStore.gameMode}
        onChange={setBgcColor}
        value={GameSettingsStore.letterBgcColor}
      />
    </SLetterBgcContainer>
  )
})
