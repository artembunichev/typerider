import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext } from '../../../../../../stores/RootStore/RootStoreContext';

const WordBorderContainer = styled.div``
const WordBorderInput = styled.input``

export const SWordBorder = observer(() => {
  const GameStore = useContext(GameStoreContext)
  
  const setWordBorder = (e) => {
    GameStore.setWordBorder(e.target.value)
  }
  return (
    <WordBorderContainer>
      <WordBorderInput
        onChange={setWordBorder}
        disabled={GameStore.gameMode}
        value={GameStore.wordsBgcColor}
        type='color'
      />
    </WordBorderContainer>
  )
})
