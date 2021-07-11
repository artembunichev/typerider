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
  const { userNickname, vehicle, typeSpeed, correctWordsCount, errorsCount } = props.game
  return (
    <GameBlockContainer>
      <GameBlockVehicleImg vehicle={vehicle}></GameBlockVehicleImg>
      <GameBlockInfo>
        <GameBlockInfoItem>Your Nickname: {userNickname}</GameBlockInfoItem>
        <GameBlockInfo>type speed: {typeSpeed}</GameBlockInfo>
        <GameBlockInfo>corrent words count: {correctWordsCount}</GameBlockInfo>
        <GameBlockInfo>errors count: {errorsCount}</GameBlockInfo>
      </GameBlockInfo>
    </GameBlockContainer>
  )
}
