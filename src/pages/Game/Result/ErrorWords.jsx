/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const ErrorWordsContainer = styled.div``
const ErrorWord = styled.div``
const ErrorLetter = styled.span`
  color: ${(props) => (props.isError ? '#ff0000' : '#000000')};
`

export const ErrorWords = (props) => {
  return (
    <ErrorWordsContainer>
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
  )
}
