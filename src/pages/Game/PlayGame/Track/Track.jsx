import React, { useContext, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { Vehicle } from './Vehicle'
import { GameStoreContext, useStore } from '../../../../stores/RootStore/RootStoreContext'
import { useScreenWidth } from '../../../../assets/hooks/useScreenWidth'
import Flag from '../../../../assets/images/flag.svg'
import { TimeToPrepare } from './Warnings/TimeToPrepare'

const TrackContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 50px 0;
`
const StyledTrack = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 3px dashed #000000;
`
const PlaceForWarning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  width: 70px;
  height: 70px;
  background-color: red;
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
    PlayGameState.updateTrackLength(trackRef.current.offsetWidth)
    if (PlayGameState.currentLetterIndex > 0) {
      PlayGameState.setNewVehiclePosition()
    }
  }, [screenWidth])

  return (
    <TrackContainer>
      <StyledTrack ref={trackRef} length={PlayGameState.trackLength}>
        <PlaceForWarning>
          {PlayGameState.isPreparing ? (
            <TimeToPrepare
              time={PlayGameState.timeToPrepare}
              setGameMode={AppStore.setGameMode}
              setIsPreparing={PlayGameState.setIsPreparing}
            />
          ) : null}
        </PlaceForWarning>
        <Vehicle model={GameSettingsStore.activeVehicleModel} />
        <FlagContainer bgImage={Flag} isJumping={isFlagJumping} />
      </StyledTrack>
    </TrackContainer>
  )
})
