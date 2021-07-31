/* eslint-disable react/prop-types */
import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'

const ColorInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4px;
`
const StyledColorInput = styled.input`
  &:hover {
    cursor: pointer;
  }
`

export const ColorInput = observer(({ setColor, colorValue }) => {
  const { AppStore } = useStore()

  return (
    <ColorInputWrapper>
      <StyledColorInput type='color' disabled={AppStore.gameMode} value={colorValue} onChange={setColor} />
    </ColorInputWrapper>
  )
})
