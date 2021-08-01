/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext } from '../../../../../stores/RootStore/RootStoreContext'

const TimeToPrepareContainer = styled.div`
  text-align: center;
`
const TimeToPrepareNumber = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
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

  return <TimeToPrepareContainer>{numbers}</TimeToPrepareContainer>
})
