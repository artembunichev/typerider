import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext } from '../../../../../../stores/RootStore/RootStoreContext';

const SLetterBgcContainer = styled.div``
const SLetterInput = styled.input``

export const SLetterBgc = observer(() => {
  const GameStore = useContext(GameStoreContext)

  const setBgcColor = (e) => {
    GameStore.setLetterBgcColor(e.target.value)
  }
  return (
    <SLetterBgcContainer>
      <SLetterInput
        type='color'
        disabled={GameStore.gameMode}
        onChange={setBgcColor}
        value={GameStore.letterBgcColor}
      />
    </SLetterBgcContainer>
  )
})
