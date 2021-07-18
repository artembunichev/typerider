/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { dateConverter } from '../../../../assets/functions/dateConverter'
import { TrashIcon } from '../../../../assets/images/iconComponents/Trash'
import { Bold, Container } from '../../../../Components/Styled/StyledComponents'
import { useStore } from '../../../../stores/RootStore/RootStoreContext'

const GameBlockContainer = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  padding: 6px;
  margin: 9px 0px;
  background-color: #9780fb;
  border-radius: 7px;
  &:first-child {
    margin-top: 0px;
  }
  &:last-child {
    margin-bottom: 0px;
  }
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
  border-right: 3px solid #000000;
`
const GameBlockInfoItem = styled.div`
  font-size: 25px;
  margin-bottom: 4px;
`
const DeleteGameContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GameBlock = (props) => {
  const { HistoryStore } = useStore()
  const { userNickname, vehicle, typeSpeed, correctWordsCount, errorsCount, raceTime, date } = props.game

  const gameDate = dateConverter(date)

  const deleteGame = (gameDate) => {
    HistoryStore.deleteCurrentGame(gameDate)
  }

  return (
    <GameBlockContainer>
      <GameVehicleImgContainer>
        <GameVehicle>
          <GameVehicleImg src={vehicle} />
        </GameVehicle>
      </GameVehicleImgContainer>
      <GameBlockInfo>
        <GameBlockInfoItem>
          <Bold>Your Nickname:</Bold> {userNickname}
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
      <DeleteGameContainer onClick={() => deleteGame(date)}>
        <TrashIcon />
      </DeleteGameContainer>
    </GameBlockContainer>
  )
}
