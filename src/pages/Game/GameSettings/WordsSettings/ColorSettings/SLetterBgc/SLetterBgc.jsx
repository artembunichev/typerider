import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext } from '../../../../../../stores/RootStore/RootStoreContext'

const SLetterBgcContainer = styled.div``
const SLetterInput = styled.input``

export const SLetterBgc = observer(() => {
  const { GameSettingsState } = useContext(GameStoreContext)

  const setBgcColor = (e) => {
    GameSettingsState.setLetterBgcColor(e.target.value)
  }
  return (
    <SLetterBgcContainer>
      <SLetterInput
        type='color'
        disabled={GameSettingsState.gameMode}
        onChange={setBgcColor}
        value={GameSettingsState.letterBgcColor}
      />
    </SLetterBgcContainer>
  )
})
