/* eslint-disable react/prop-types */
import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'

const ColorInputWrapper = styled.div``
const StyledColorInput = styled.input``

export const ColorInput = observer(({ setColor, colorValue }) => {
  const { AppStore } = useStore()

  return (
    <ColorInputWrapper>
      <StyledColorInput type='color' disabled={AppStore.gameMode} value={colorValue} onChange={setColor} />
    </ColorInputWrapper>
  )
})
