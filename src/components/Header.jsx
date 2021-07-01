import styled from '@emotion/styled'
import React from 'react'

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #640000;
  text-align: left;
`
const HeaderTitle = styled.div`
  display: inline-block;
  font-family: 'Homemade Apple', cursive;
  font-size: 36px;
  color: #fdb301;
  padding: 3px 0px 3px 22px;
  user-select: none;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>typerider</HeaderTitle>
    </HeaderContainer>
  )
}
