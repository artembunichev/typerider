import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext } from '../../../../../../stores/RootStore/RootStoreContext'

const SLettersContainer = styled.div``
const SLettersInput = styled.input``

export const SLetters = observer(() => {
  const { GameSettingsState } = useContext(GameStoreContext)

  const setLettersColor = (e) => {
    GameSettingsState.setLettersColor(e.target.value)
  }
  return (
    <SLettersContainer>
      <SLettersInput
        disabled={GameSettingsState.gameMode}
        type='color'
        onChange={setLettersColor}
        value={GameSettingsState.lettersColor}
      />
    </SLettersContainer>
  )
})
