/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext } from '../../../../../stores/RootStore/RootStoreContext'

const TimeToPrepareContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-start;
`
const NumbersContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  left: 0px;
`
const TimeToPrepareNumber = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 200px;
  top: 0px;
  left: 0px;
  font-size: 100px;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: ${(props) => (props.isVisible ? 'scale(1)' : 'scale(0)')};
  transition: 0.75s;
`

export const TimeToPrepare = observer(() => {
  const { PlayGameState } = useContext(GameStoreContext)

  const numbers = PlayGameState.timeArray.map((number) => {
    return (
      <TimeToPrepareNumber key={number.text} isVisible={number.isVisible}>
        {number.text}
      </TimeToPrepareNumber>
    )
  })

  return (
    <TimeToPrepareContainer>
      <NumbersContainer>{numbers}</NumbersContainer>
    </TimeToPrepareContainer>
  )
})
