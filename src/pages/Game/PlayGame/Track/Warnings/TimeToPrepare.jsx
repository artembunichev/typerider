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
  position: relative;
  left: 18px;
`
const TimeToPrepareNumber = styled.div`
  @media (max-width: 1440px) {
    font-size: 90px;
  }
  @media (max-width: 1270px) {
    font-size: 82px;
  }
  @media (max-width: 1100px) {
    font-size: 71px;
  }
  @media (max-width: 1000px) {
    font-size: 68px;
  }
  @media (max-width: 500px) {
    font-size: 57px;
  }
  @media (max-width: 470px) {
    font-size: 53px;
  }

  font-size: 100px;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  top: 0px;
  left: 0px;
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
