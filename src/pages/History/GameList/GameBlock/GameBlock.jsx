/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { dateConverter } from '../../../../assets/functions/dateConverter'
import { Bold } from '../../../../Components/Styled/StyledComponents'

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
  padding: 5px 0px 5px 20px;
`
const GameBlockInfoItem = styled.div`
  font-size: 25px;
  margin-bottom: 4px;
`

export const GameBlock = (props) => {
  const { userNickname, vehicle, typeSpeed, correctWordsCount, errorsCount, raceTime, date } = props.game

  const gameDate = dateConverter(date)

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
    </GameBlockContainer>
  )
}
