import styled from 'styled-components'

export const Bold = styled.span`
  font-weight: bold;
`
export const Container = styled.div`
  flex: 1 0 auto;
`
export const Title = styled.div`
  @media (max-width: 650px) {
    font-size: 44px;
  }
  @media (max-width: 540px) {
    font-size: 40px;
  }
  @media (max-width: 490px) {
    font-size: 35px;
  }
  @media (max-width: 440px) {
    font-size: 31px;
  }
  @media (max-width: 390px) {
    font-size: 28px;
  }
  @media (max-width: 360px) {
    font-size: 26px;
  }
  font-size: 48px;
  text-align: center;
  color: #ff820d;
  padding: 0 8px 8px 8px;
  background-color: #000000;
  border-radius: 0px 0px 7px 7px;
`
