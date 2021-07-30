import styled from 'styled-components'

export const Bold = styled.span`
  font-weight: bold;
`
export const Container = styled.div`
  flex: 1 0 auto;
`
export const Title = styled.div`
  @media (max-width: 650px) {
    font-size: 46px;
  }
  @media (max-width: 540px) {
    font-size: 41px;
  }
  @media (max-width: 490px) {
    font-size: 36px;
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
  font-size: 55px;
  text-align: center;
  color: #ff820d;
  padding: 0 8px 8px 8px;
  background-color: #000000;
  border-radius: 0px 0px 7px 7px;
`
export const SettingsMainTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.2px;
  text-align: center;
  background-color: #000000;
  border-radius: 12px;
  padding: 7px;
  margin-bottom: 6px;
`
export const SettingsButton = styled.button`
  border-radius: 9px;
  background-color: #eeeeee;
  padding: 6px;
`
