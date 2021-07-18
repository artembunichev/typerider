/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 999;
  opacity: ${(props) => (props.isPopup ? 1 : 0)};
  pointer-events: ${(props) => (props.isPopup ? 'auto' : 'none')};
  transition: opacity 0.2s;
  background-color: rgba(0, 0, 0, 0.52);
`
const PopupForm = styled.div`
  width: 50%;
  height: 50%;
  background-color: #f8f8f8;
  border-radius: 20px;
  transform: ${(props) => (props.isPopup ? 'scale(1)' : 'scale(0)')};
  transition: transform 0.4s;
`
const PopupFormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 25px;
`
const PopupFormTitle = styled.div`
  font-size: 39px;
`
const PopupButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`
const PopupButton = styled.button`
  width: 200px;
  height: 74px;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`
const PopupYesButton = styled(PopupButton)`
  background-color: #89ff5a;
`
const PopupNoButton = styled(PopupButton)`
  background-color: #ff5a5a;
`

export const ConfirmPopup = ({ isPopup, title, yesFunction, noFunction }) => {
  return (
    <PopupContainer isPopup={isPopup}>
      <PopupForm isPopup={isPopup}>
        <PopupFormContent>
          <PopupFormTitle>{title}</PopupFormTitle>
          <PopupButtonsContainer>
            <PopupYesButton onClick={yesFunction}>YES</PopupYesButton>
            <PopupNoButton onClick={noFunction}>NO</PopupNoButton>
          </PopupButtonsContainer>
        </PopupFormContent>
      </PopupForm>
    </PopupContainer>
  )
}
