import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext } from '../../../../../../stores/RootStore/RootStoreContext'

const SLettersContainer = styled.div``
const SLettersInput = styled.input``

export const SLetters = observer(() => {
  const GameStore = useContext(GameStoreContext)

  const setLettersColor = (e) => {
    GameStore.setLettersColor(e.target.value)
  }
  return (
    <SLettersContainer>
      <SLettersInput disabled={GameStore.gameMode} type='color' onChange={setLettersColor} value={GameStore.lettersColor} />
    </SLettersContainer>
  )
})
