import React, { useContext, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { Vehicle } from './Vehicle'
import { GameStoreContext, useStore } from '../../../../stores/RootStore/RootStoreContext'
import { useScreenWidth } from '../../../../assets/hooks/useScreenWidth'
import Flag from '../../../../assets/images/flag.svg'
import { TimeToPrepare } from './Warnings/TimeToPrepare'
import { Error } from './Warnings/Error'

const TrackContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  @media (min-width: 1000px) {
    padding: 10px 30px 50px 0;
  }
  padding: 10px 0 50px 0;
`
const StyledTrack = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 3px dashed #000000;
  @media (max-width: 500px) {
    padding-top: 60px;
  }
  padding-top: 67px;
`
const PlaceForWarning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  @media (min-width: 390px) {
    margin-top: 20px;
  }
  @media (max-with: 390px) {
    margin-top: 15px;
  }
  @media (min-width: 1000px) {
    padding-left: 30px;
  }
  padding-left: 0px;
`
const FlagContainer = styled.div`
  position: absolute;
  right: -45px;
  bottom: ${(props) => (props.isJumping ? '14px' : '5px')};
  @media (max-width: 490px) {
    right: -27px;
    bottom: ${(props) => (props.isJumping ? '14px' : '4px')};
  }
  @media (max-width: 1000px) {
    width: 55px;
    height: 55px;
    right: -35px;
  }
  @media (max-width: 490px) {
    width: 49px;
    height: 49px;
  }
  @media (max-width: 440px) {
    width: 43px;
    height: 43px;
  }
  @media (max-width: 340px) {
    width: 41px;
    height: 41px;
  }
  width: 64px;
  height: 64px;
  background-image: ${(props) => `url(${props.bgImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotate(-13deg);
  transition: bottom 0.2s ease-in;
`

export const Track = observer(({ isFlagJumping }) => {
  const { AppStore, GameSettingsStore } = useStore()
  const { PlayGameState } = useContext(GameStoreContext)
  const screenWidth = useScreenWidth()
  const trackRef = useRef(null)

  useEffect(() => {
    for (let i = PlayGameState.timeToPrepare; i > 0; i--) {
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
  }, [])

  useEffect(() => {
    PlayGameState.updateTrackLength(trackRef.current.offsetWidth)
    if (PlayGameState.currentLetterIndex > 0) {
      PlayGameState.setNewVehiclePosition()
    }
  }, [screenWidth])

  return (
    <TrackContainer>
      <PlaceForWarning>
        {(!AppStore.gameMode || PlayGameState.isPreparing) && <TimeToPrepare />}
        {PlayGameState.isError && <Error />}
      </PlaceForWarning>
      <StyledTrack ref={trackRef} length={PlayGameState.trackLength}>
        <Vehicle model={GameSettingsStore.activeVehicleModel} />
        <FlagContainer bgImage={Flag} isJumping={isFlagJumping} />
      </StyledTrack>
    </TrackContainer>
  )
})
