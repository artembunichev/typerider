/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const ErrorWordsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  max-width: 330px;
  border-radius: 5px;
  padding: 6px;
  flex-wrap: wrap;
  background-color: #314a68;
  list-style: none;
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
