/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStore, GameStoreContext } from '../../../../../stores/RootStore/RootStoreContext'

const TimeToPrepareNumber = styled.div`
  font-size: 100px;
`

export const TimeToPrepare = ({ time }) => {
  const { AppStore } = useStore()
  const { PlayGameState } = useContext(GameStoreContext)
  const [timeArray, setTimeArray] = useState([])
  const [currentNumberIndex, setCurrentNumberIndex] = useState(0)

  useEffect(() => {
    for (let i = time; i > 0; i--) {
      setTimeArray((prevArray) => [
        ...prevArray,
        {
          text: i,
          isVisible: false,
        },
      ])
      if (i === 1) {
        setTimeArray((prevArray) => [
          ...prevArray,
          {
            text: 'GO!',
            isVisible: false,
          },
        ])
      }
    }
    let interval
    let index = 0
    interval = setInterval(() => {
      index = index + 1
      if (index !== time + 1) {
        setCurrentNumberIndex(index)
      } else {
        PlayGameState.setIsPreparing(false)
        AppStore.setGameMode(true)
      }
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return <TimeToPrepareNumber>{timeArray.length !== 0 && timeArray[currentNumberIndex].text}</TimeToPrepareNumber>
}
