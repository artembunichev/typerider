/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styled from 'styled-components'

const ErrorWordsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const ErrorWordsContainer = styled.ul`
  display: flex;
  position: ${(props) => (props.isPositionAbsolute ? 'absolute' : 'relative')};
  right: ${(props) => (props.isWordsVisible ? '0px' : '280px')};
  opacity: ${(props) => (props.isWordsVisible ? '1' : '0')};
  top: 0px;
  justify-content: start;
  max-width: 330px;
  border-radius: 5px;
  padding: 6px;
  flex-wrap: wrap;
  background-color: #314a68;
  list-style: none;
  transition: 0.38s;
`
const ErrorWordsPicker = styled.div``
const ErrorWordsPickerTitle = styled.div`
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`
const ErrorWord = styled.li`
  font-size: 32px;
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
    }, 380)
  }

  return (
    <ErrorWordsWrapper>
      <ErrorWordsPicker>
        {isWordsVisible ? (
          <ErrorWordsPickerTitle onClick={hideWords}>Hide Error Words</ErrorWordsPickerTitle>
        ) : (
          <ErrorWordsPickerTitle onClick={showWords}>Show Error Words</ErrorWordsPickerTitle>
        )}
      </ErrorWordsPicker>
      <ErrorWordsContainer isWordsVisible={isWordsVisible} isPositionAbsolute={isPositionAbsolute}>
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
