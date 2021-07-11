/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const GameBlockContainer = styled.div`
  display: flex;
  background-color: #9780fb;
`
const GameBlockVehicleImg = styled.div`
  width: 50px;
  height: 50px;
  background-image: ${(props) => {
    return `url('${props.vehicle}')`
  }};
`
const GameBlockInfo = styled.div`
  display: flex;
  flex-direction: column;
`
const GameBlockInfoItem = styled.div``

export const GameBlock = (props) => {
  const { userNickname, vehicle, typeSpeed, correctWordsCount, errorsCount, date } = props.game
  const gameDate = new Date(date)
  const day = gameDate.getDate()
  const month = gameDate.getMonth() + 1
  const year = gameDate.getFullYear()
  const hours = gameDate.getHours()
  const minutes = gameDate.getMinutes()
  const dateofTheGame = `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year},${
    hours < 10 ? `0${hours}` : hours
  }:${minutes < 10 ? `0${minutes}` : minutes}`

  return (
    <GameBlockContainer>
      <GameBlockVehicleImg vehicle={vehicle}></GameBlockVehicleImg>
      <GameBlockInfo>
        <GameBlockInfoItem>Your Nickname: {userNickname}</GameBlockInfoItem>
        <GameBlockInfo>type speed: {typeSpeed}</GameBlockInfo>
        <GameBlockInfo>corrent words count: {correctWordsCount}</GameBlockInfo>
        <GameBlockInfo>errors count: {errorsCount}</GameBlockInfo>
        <GameBlockInfo>Game date: {dateofTheGame}</GameBlockInfo>
      </GameBlockInfo>
    </GameBlockContainer>
  )
}
