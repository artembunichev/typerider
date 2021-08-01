/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore, GameStoreContext } from '../../../../../stores/RootStore/RootStoreContext'

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

export const TimeToPrepare = observer(({ time }) => {
  const { AppStore } = useStore()
  const { PlayGameState } = useContext(GameStoreContext)

  useEffect(() => {
    for (let i = time; i > 0; i--) {
      if (i === time) {
        PlayGameState.setTimeArray({
          text: i,
          isVisible: true,
        })
      } else {
        PlayGameState.setTimeArray({
          text: i,
          isVisible: false,
        })
        if (i === 1) {
          PlayGameState.setTimeArray({
            text: 'GO!',
            isVisible: false,
          })
        }
      }
    }
    let interval
    if (PlayGameState.length !== 0) {
      interval = setInterval(() => {
        if (PlayGameState.currentTimeIndex === PlayGameState.timeArray.length - 1) {
          AppStore.setGameMode(true)
          PlayGameState.setIsPreparing(false)
        } else {
          PlayGameState.setCurrentTimeIndex()
          PlayGameState.setVisibleNumber(PlayGameState.currentNumber)
        }
      }, 1500)
    }
    return () => clearInterval(interval)
  }, [])

  const numbers = PlayGameState.timeArray.map((number) => {
    return (
      <TimeToPrepareNumber key={number.text} isVisible={number.isVisible}>
        {number.text}
      </TimeToPrepareNumber>
    )
  })

  return <TimeToPrepareContainer>{numbers}</TimeToPrepareContainer>
})
