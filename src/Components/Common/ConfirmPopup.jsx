/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { Bold } from '../Styled/StyledComponents'

const PopupContainer = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.534);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.isPopup ? 1 : 0)};
  pointer-events: ${(props) => (props.isPopup ? 'all' : 'none')};
  transition: opacity 0.2s;
`
const PopupBlock = styled.div`
  margin: 32px;
  overflow-x: auto;
  display: flex;
  align-items: center;
  position: relative;
  @media (min-width: 1950px) {
    min-width: 30%;
    min-height: 20%;
  }
  width: 920px;
  height: 380px;
  max-width: 90%;
  max-height: 90%;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 0px 17px -1px rgba(50, 50, 50, 0.75);
  transform: ${(props) => (props.isPopup ? 'scale(1)' : 'scale(0)')};
  transition: transform 0.4s;
`
const PopupBlockContent = styled.div`
  width: 100%;
  padding: 32px;
`
const PopupTitle = styled.div`
  @media (max-width: 768px) {
    font-size: 4vw;
  }
  @media (min-width: 2000px) {
    font-size: 1.6vw;
  }
  font-size: 40px;
  text-align: center;
  margin-bottom: 25px;
`
const PopupButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`
const PopupButtons = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
`
const PopupButton = styled.button`
  @media (max-width: 768px) {
    font-size: 2.5vw;
    width: 20vw;
    height: 15vh;
  }
  @media (min-width: 2000px) {
    font-size: 1.3vw;
    width: 7vw;
    height: 6vh;
  }
  width: 200px;
  height: 70px;
  font-size: 29px;
  margin: 0 6px;
  &:hover {
    cursor: pointer;
  }
`
const PopupYesButton = styled(PopupButton)`
  background-color: #7aff5f;
`
const PopupNoButton = styled(PopupButton)`
  background-color: #ff5f5f;
`

export const ConfirmPopup = ({ isPopup, title, yesFunction, noFunction }) => {
  return (
    <PopupContainer isPopup={isPopup}>
      <PopupBlock isPopup={isPopup}>
        <PopupBlockContent>
          <PopupTitle>
            <Bold>{title}</Bold>
          </PopupTitle>
          <PopupButtonsContainer>
            <PopupButtons>
              <PopupYesButton onClick={yesFunction}>
                <Bold>YES</Bold>
              </PopupYesButton>
              <PopupNoButton onClick={noFunction}>
                <Bold>NO</Bold>
              </PopupNoButton>
            </PopupButtons>
          </PopupButtonsContainer>
        </PopupBlockContent>
      </PopupBlock>
    </PopupContainer>
  )
}
