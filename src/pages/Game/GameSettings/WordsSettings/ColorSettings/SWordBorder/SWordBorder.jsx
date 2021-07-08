import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../../../stores/RootStore/RootStoreContext'

const WordBorderContainer = styled.div``
const WordBorderInput = styled.input``

export const SWordBorder = observer(() => {
  const { GameSettingsStore } = useStore()
  
  const setWordBorder = (e) => {
    GameSettingsStore.setWordBorder(e.target.value)
  }
  return (
    <WordBorderContainer>
      <WordBorderInput
        onChange={setWordBorder}
        disabled={GameSettingsStore.gameMode}
        value={GameSettingsStore.wordsBgcColor}
        type='color'
      />
    </WordBorderContainer>
  )
})
