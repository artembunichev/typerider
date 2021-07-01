import styled from '@emotion/styled'
import React from 'react'

const HeaderContainer = styled.div`
  background-color: #640000;
  text-align: left;
  padding: 3px 0px 3px 22px;
`
const HeaderTitle = styled.div`
  display: inline-block;
  font-family: 'Homemade Apple', cursive;
  font-size: 36px;
  color: #fdb301;
  user-select: none;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>typerider</HeaderTitle>
    </HeaderContainer>
  )
}
