/* eslint-disable react/prop-types */
import React, { memo } from 'react'
import styled from 'styled-components'
import { useStore } from '../../../stores/RootStore/RootStoreContext'
import { dateConverter } from '../../../assets/functions/dateConverter'
import { Bold, Container } from '../../../components/styled/styledComponents'
import { TrashIcon } from '../../../assets/images/iconComponents/Trash'

const GameBlockContainer = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  background-color: ${(props) => props.blockColor};
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
  @media (max-width: 540px) {
    width: 118px;
    height: 118px;
  }
  @media (max-width: 490px) {
    width: 90px;
    height: 90px;
  }
  @media (max-width: 390px) {
    width: 76px;
    height: 76px;
  }
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
  @media (max-width: 650px) {
    font-size: 23px;
  }
  @media (max-width: 540px) {
    font-size: 21px;
  }
  @media (max-width: 490px) {
    font-size: 18px;
  }
  @media (max-width: 440px) {
    font-size: 16px;
  }
  @media (max-width: 390px) {
    font-size: 15px;
  }
  @media (max-width: 360px) {
    font-size: 14px;
  }
  font-size: 25px;
  margin-bottom: 4px;
  line-height: 28px;
`
const DeleteGameContainer = styled(Container)`
  svg {
    @media (max-width: 650px) {
      width: 36px;
      height: 36px;
    }
    @media (max-width: 540px) {
      width: 33px;
      height: 33px;
    }
    @media (max-width: 490px) {
      width: 31px;
      height: 31px;
    }
    @media (max-width: 440px) {
      width: 29px;
      height: 29px;
    }
    @media (max-width: 390px) {
      width: 25px;
      height: 25px;
    }
    width: 40px;
    height: 40px;
  }
  width: 14%;
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
  const { userNickname, vehicle, typeSpeed, correctWordsCount, errorsCount, raceTime, date, color } = props.game
  const { setIsPopup, setGameForDelete } = props

  const gameDate = dateConverter(date)

  const showPopup = (gameDate) => {
    setGameForDelete(gameDate)
    setIsPopup(true)
    AppStore.setIsAnyPopupOpen(true)
  }

  return (
    <GameBlockContainer blockColor={color}>
      <GameBlockMain>
        <GameVehicleImgContainer>
          <GameVehicle>
            <GameVehicleImg src={vehicle} />
          </GameVehicle>
        </GameVehicleImgContainer>
        <GameBlockInfo>
          <GameBlockInfoItem>
            <Bold>Nickname:</Bold> {userNickname}
          </GameBlockInfoItem>
          <GameBlockInfoItem>
            <Bold>Type speed:</Bold> {typeSpeed}
          </GameBlockInfoItem>
          <GameBlockInfoItem>
            <Bold>Corrent words count:</Bold> {correctWordsCount}
          </GameBlockInfoItem>
          <GameBlockInfoItem>
            <Bold>Errors count:</Bold> {errorsCount}
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
