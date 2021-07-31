import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Bold, Container, Title } from '../../Components/Styled/StyledComponents'
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
const NoGameHistory = styled.div`
  padding: 5px 20px;
  font-size: 32px;
  text-align: center;
  @media (max-width: 650px) {
    font-size: 31px;
  }
  @media (max-width: 540px) {
    font-size: 30px;
  }
  @media (max-width: 490px) {
    font-size: 29px;
  }
  @media (max-width: 440px) {
    font-size: 28px;
  }
  @media (max-width: 390px) {
    font-size: 26px;
  }
  @media (max-width: 360px) {
    font-size: 24px;
  }
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
      <Title>
        <Bold>Your Game History</Bold>
      </Title>
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
