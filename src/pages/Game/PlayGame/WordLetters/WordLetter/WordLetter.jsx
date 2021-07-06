/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const WordLetterContainer = styled.div`
  display: inline-block;
  background-color: ${(props) => {
    return props.completed ? '#15ff00' : 'transparent'
  }};
`
const WordLetterWrapper = styled.span`
  color: #000000;
`

export const WordLetter = (props) => {
  return (
    <WordLetterContainer completed={props.completed}>
      <WordLetterWrapper>{props.letter}</WordLetterWrapper>
    </WordLetterContainer>
  )
}
