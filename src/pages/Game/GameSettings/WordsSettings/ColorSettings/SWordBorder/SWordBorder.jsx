import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext, useStore } from '../../../../../../stores/RootStore/RootStoreContext';

const WordBorderContainer = styled.div``
const WordBorderInput = styled.input``

export const SWordBorder = observer(() => {
  const {AppStore} = useStore()
  const {GameSettingsState} = useContext(GameStoreContext)
  
  const setWordBorder = (e) => {
    GameSettingsState.setWordBorder(e.target.value)
  }
  return (
    <WordBorderContainer>
      <WordBorderInput
        onChange={setWordBorder}
        disabled={AppStore.gameMode}
        value={GameSettingsState.wordsBgcColor}
        type='color'
      />
    </WordBorderContainer>
  )
})
