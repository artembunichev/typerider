import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Bold, Container } from '../../Components/Styled/StyledComponents'
import { GameList } from './GameList/GameList'
import { HistoryFilters } from './HistoryFilters/HistoryFilters'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../stores/RootStore/RootStoreContext'
import { ConfirmPopup } from '../../Components/Common/ConfirmPopup'
import { wordFormConverter } from '../../assets/functions/wordFormConverter'

const HistoryContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0e3e8;
`
const HistoryWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e0e3e8;
`
const HistoryTitle = styled.div`
  @media (max-width: 650px) {
    font-size: 44px;
  }
  @media (max-width: 540px) {
    font-size: 40px;
  }
  @media (max-width: 490px) {
    font-size: 35px;
  }
  @media (max-width: 440px) {
    font-size: 31px;
  }
  @media (max-width: 390px) {
    font-size: 28px;
  }
  @media (max-width: 360px) {
    font-size: 26px;
  }
  font-size: 48px;
  text-align: center;
  color: #ff820d;
  padding: 0 8px 8px 8px;
  background-color: #000000;
  border-radius: 0px 0px 7px 7px;
`
const NoGameHistory = styled.div`
  font-size: 32px;
`

export const History = observer(() => {
  const { AppStore, HistoryStore } = useStore()
  const [isDeleteGamePopup, setIsDeleteGamePopup] = useState(false)
  const [isClearHistoryPopup, setIsClearHistoryPopup] = useState(false)
  const [gameForDelete, setGameForDelete] = useState(null)

  useEffect(() => {
    AppStore.setOnHistoryPage(true)
    return () => {
      AppStore.setOnHistoryPage(false)
    }
  }, [])

  const filter = HistoryStore.activeFilterValue
  const gameForm = wordFormConverter('game', HistoryStore.gameHistory.length)
  const sortedHistory = HistoryStore.gameHistory.slice().sort((a, b) => {
    if (filter === 'errorsCount') {
      return a[filter] - b[filter]
    }
    return b[filter] - a[filter]
  })

  //! CONFIG FOR CLEARHISTORY POPUP
  const yesFunctionForClearHistory = () => {
    HistoryStore.clearHistory()
    setIsClearHistoryPopup(false)
    AppStore.setIsAnyPopupOpen(false)
  }
  const noFunctionForClearHistory = () => {
    setIsClearHistoryPopup(false)
    AppStore.setIsAnyPopupOpen(false)
  }
  const configForClearGamePopup = {
    isPopup: isClearHistoryPopup,
    title: `Do you want to clear your game history (${HistoryStore.gameHistory.length} ${gameForm})?`,
    yesFunction: yesFunctionForClearHistory,
    noFunction: noFunctionForClearHistory,
  }

  //! CONFIG FOR DELETEGAME POPUP
  const yesFunctionForDeleteGame = () => {
    HistoryStore.deleteCurrentGame(gameForDelete)
    setIsDeleteGamePopup(false)
    AppStore.setIsAnyPopupOpen(false)
    setGameForDelete(null)
  }
  const noFunctionForDeleteGame = () => {
    setIsDeleteGamePopup(false)
    AppStore.setIsAnyPopupOpen(false)
    setGameForDelete(null)
  }
  const configForDeleteGamePopup = {
    isPopup: isDeleteGamePopup,
    title: `Do you want to delete this game from history?`,
    yesFunction: yesFunctionForDeleteGame,
    noFunction: noFunctionForDeleteGame,
  }

  return (
    <HistoryContainer>
      <HistoryTitle>
        <Bold>Your Game History</Bold>
      </HistoryTitle>
      {HistoryStore.gameHistory.length ? (
        <HistoryWrapper>
          <HistoryFilters setIsPopup={setIsClearHistoryPopup} />
          <GameList
            sortedHistory={sortedHistory}
            setIsPopup={setIsDeleteGamePopup}
            setGameForDelete={setGameForDelete}
          />
        </HistoryWrapper>
      ) : (
        <NoGameHistory>
          <Bold>Your game history is empty</Bold>
        </NoGameHistory>
      )}
      <ConfirmPopup {...configForClearGamePopup} />
      <ConfirmPopup {...configForDeleteGamePopup} />
    </HistoryContainer>
  )
})
