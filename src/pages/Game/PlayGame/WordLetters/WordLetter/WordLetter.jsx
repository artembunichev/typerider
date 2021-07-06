/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const WordLetterContainer = styled.div`
  display: inline-block;
`
const WordLetterWrapper = styled.span`
  color: ${(props) => {
    return props.completed ? '#15ff00' : '#000000'
  }};
`

export const WordLetter = (props) => {
  return (
    <WordLetterContainer>
      <WordLetterWrapper completed={props.completed}>{props.letter}</WordLetterWrapper>
    </WordLetterContainer>
  )
}
