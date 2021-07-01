import styled from '@emotion/styled'
import React from 'react'

const HeaderContainer = styled.div`
  background-color: #161414;
  text-align: left;
  padding: 3px 0px 3px 22px;
`
const HeaderTitle = styled.span`
  font-family: 'Homemade Apple', cursive;
  font-size: 36px;
  color: #ff820d;
  user-select: none;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>typerider</HeaderTitle>
    </HeaderContainer>
  )
}
