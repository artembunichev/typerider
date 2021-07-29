/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styled from 'styled-components'

const ErrorWordsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const ErrorWordsContainer = styled.ul`
  display: flex;
  position: ${(props) => (props.isPositionAbsolute ? 'absolute' : 'relative')};
  right: ${(props) => (props.isWordsVisible ? '0px' : '280px')};
  opacity: ${(props) => (props.isWordsVisible ? '1' : '0')};
  top: 0px;
  justify-content: start;
  max-width: ${(props) => `${(props.resultInfoWidth / 100) * 80}px`};
  border-radius: 5px;
  padding: 6px;
  flex-wrap: wrap;
  background-color: #314a68;
  list-style: none;
  transition: ${(props) => `${props.animationDuration / 1000}s`};
`
const ErrorWordsPicker = styled.div`
  padding: 11px;
  background-color: ${(props) => (props.isWordsVisible ? '#979797' : '#42d3ff')};
  border-radius: 20px;
  margin-bottom: ${(props) => !props.isPositionAbsolute && '12px'};
  &:hover {
    cursor: pointer;
  }
  transition: background-color 0.3s;
`
const ErrorWordsPickerTitle = styled.div`
  font-size: 36px;
  user-select: none;
`
const ErrorWord = styled.li`
  font-size: 38px;
  background-color: #dfdfdf;
  padding: 8px;
  margin: 6px;
  border-radius: 8px;
`
const ErrorLetter = styled.span`
  color: ${(props) => (props.isError ? '#ff0000' : '#000000')};
`

export const ErrorWords = (props) => {
  const [isWordsVisible, setIsWordsVisible] = useState(false)
  const [isPositionAbsolute, setIsPositionAbsolute] = useState(true)

  const animationDuration = 380

  const showWords = (e) => {
    if (!isPositionAbsolute) {
      e.preventDefault()
    } else {
      setIsWordsVisible(true)
      setIsPositionAbsolute(false)
    }
  }
  const hideWords = () => {
    setIsWordsVisible(false)
    setTimeout(() => {
      setIsPositionAbsolute(true)
    }, animationDuration)
  }

  return (
    <ErrorWordsWrapper>
      <ErrorWordsPicker isPositionAbsolute={isPositionAbsolute} isWordsVisible={isWordsVisible}>
        {isWordsVisible ? (
          <ErrorWordsPickerTitle onClick={hideWords}>Hide Error Words</ErrorWordsPickerTitle>
        ) : (
          <ErrorWordsPickerTitle onClick={showWords}>Show Error Words</ErrorWordsPickerTitle>
        )}
      </ErrorWordsPicker>
      <ErrorWordsContainer
        resultInfoWidth={props.resultInfoWidth}
        isWordsVisible={isWordsVisible}
        isPositionAbsolute={isPositionAbsolute}
        animationDuration={animationDuration}>
        {props.words.map((word) => {
          const key = word.letters.reduce((key, letter) => {
            key = key + letter.id
            return key
          }, '')
          return (
            <ErrorWord key={key}>
              {word.letters.map((letter) => {
                return (
                  <ErrorLetter key={letter.id} isError={letter.isError}>
                    {letter.letter}
                  </ErrorLetter>
                )
              })}
            </ErrorWord>
          )
        })}
      </ErrorWordsContainer>
    </ErrorWordsWrapper>
  )
}
