/* eslint-disable react/prop-types */
import React, { memo } from 'react'
import styled from 'styled-components'
import { dateConverter } from '../../../../assets/functions/dateConverter'
import { TrashIcon } from '../../../../assets/images/iconComponents/Trash'
import { Bold, Container } from '../../../../Components/Styled/StyledComponents'
import { useStore } from '../../../../stores/RootStore/RootStoreContext'

const GameBlockContainer = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  background-color: #9780fb;
  border-radius: 12px;
  margin: 9px 0px;
  &:first-child {
    margin-top: 0px;
  }
  &:last-child {
    margin-bottom: 0px;
  }
`
const GameBlockMain = styled.div`
  display: flex;
  padding: 6px;
`
const GameVehicleImgContainer = styled.div`
  display: flex;
  align-items: center;
`
const GameVehicle = styled.div`
  width: 140px;
  height: 140px;
  background-color: #c5ddf0;
  padding: 5px;
  border-radius: 5px;
  user-select: none;
`
const GameVehicleImg = styled.img`
  pointer-events: none;
`
const GameBlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 5px 5px 20px;
`
const GameBlockInfoItem = styled.span`
  font-size: 25px;
  margin-bottom: 4px;
`
const DeleteGameContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 12px 12px 0;
  border-left: 1px solid #000000;
  transition: background-color 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #ff4d4d;
  }
  &:active {
    background-color: #ff0000;
  }
`

export const GameBlock = memo((props) => {
  const { AppStore } = useStore()
  const { userNickname, vehicle, typeSpeed, correctWordsCount, errorsCount, raceTime, date } = props.game
  const { setIsPopup, setGameForDelete } = props

  const gameDate = dateConverter(date)

  const showPopup = (gameDate) => {
    setGameForDelete(gameDate)
    setIsPopup(true)
    AppStore.setIsAnyPopupOpen(true)
  }

  return (
    <GameBlockContainer>
      <GameBlockMain>
        <GameVehicleImgContainer>
          <GameVehicle>
            <GameVehicleImg src={vehicle} />
          </GameVehicle>
        </GameVehicleImgContainer>
        <GameBlockInfo>
          <GameBlockInfoItem>
            <Bold>nickname:</Bold> {userNickname}
          </GameBlockInfoItem>
          <GameBlockInfoItem>
            <Bold>type speed:</Bold> {typeSpeed}
          </GameBlockInfoItem>
          <GameBlockInfoItem>
            <Bold>corrent words count:</Bold> {correctWordsCount}
          </GameBlockInfoItem>
          <GameBlockInfoItem>
            <Bold>errors count:</Bold> {errorsCount}
          </GameBlockInfoItem>
          <GameBlockInfoItem>
            <Bold>Race time:</Bold> {raceTime} seconds
          </GameBlockInfoItem>
          <GameBlockInfoItem>
            <Bold>Game date:</Bold> {gameDate}
          </GameBlockInfoItem>
        </GameBlockInfo>
      </GameBlockMain>
      <DeleteGameContainer onClick={() => showPopup(date)}>
        <TrashIcon />
      </DeleteGameContainer>
    </GameBlockContainer>
  )
})
GameBlock.displayName = 'GameBlock'
