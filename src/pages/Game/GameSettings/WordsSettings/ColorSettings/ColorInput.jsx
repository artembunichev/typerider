/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore, GameStoreContext } from '../../../../../stores/RootStore/RootStoreContext'

const ColorInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4px;
`
const StyledColorInput = styled.input`
  @media (max-width: 390px) {
    width: 35px;
    height: 20px;
  }
  &:hover {
    cursor: pointer;
  }
`

export const ColorInput = observer(({ setColor, colorValue }) => {
  const { AppStore } = useStore()
  const { PlayGameState } = useContext(GameStoreContext)

  return (
    <ColorInputWrapper>
      <StyledColorInput
        type='color'
        disabled={AppStore.gameMode || PlayGameState.isPreparing}
        value={colorValue}
        onChange={setColor}
      />
    </ColorInputWrapper>
  )
})
