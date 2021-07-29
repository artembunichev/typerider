import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import { GameStoreContext } from '../../../stores/RootStore/RootStoreContext'
import { Container, Bold, Title } from '../../../Components/Styled/StyledComponents'
import { ErrorWords } from './ErrorWords'
import { wordFormConverter } from '../../../assets/functions/wordFormConverter'

const ResultContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #45678f;
`
const ResultTitle = styled(Title)`
  font-size: 50px;
  padding: 0 60px 15px 60px;
  @media (max-width: 650px) {
    font-size: 44px;
    padding: 0 50px 15px 50px;
  }
  @media (max-width: 540px) {
    font-size: 40px;
    padding: 0 35px 10px 35px;
  }
  @media (max-width: 490px) {
    font-size: 30px;
    padding: 0 20px 8px 20px;
  }
  @media (max-width: 440px) {
    font-size: 27px;
    padding: 0 12px 8px 12px;
  }
  @media (max-width: 390px) {
    font-size: 24px;
    padding: 0 8px 8px 8px;
  }
  @media (max-width: 360px) {
    font-size: 26px;
  }
`
const ResultInfo = styled.div`
  padding: 25px;
`
const ResultItem = styled.div`
  font-size: 30px;
`

export const Result = observer(() => {
  const { ResultState } = useContext(GameStoreContext)

  useEffect(() => {
    ResultState.setErrorLettersCountInWords()
  }, [])

  const history = useHistory()

  if (!ResultState.isResultReady) {
    history.push('/')
  }
  
  const wordForm = wordFormConverter('word', ResultState.correctWordsCount)
  const mistakeForm = wordFormConverter('mistake', ResultState.errorsCount)

  const goAgain = () => {
    history.push('/')
  }

  return (
    <ResultContainer>
      <ResultTitle>Result</ResultTitle>
      <ResultInfo>
        <ResultItem>
          You got <Bold>{ResultState.correctWordsCount}</Bold> correct {wordForm}!
        </ResultItem>
        <ResultItem>
          You got <Bold>{ResultState.errorsCount}</Bold> {mistakeForm} ({ResultState.errorsPercent}%)
        </ResultItem>
        {ResultState.errorWords.length !== 0 && <ErrorWords words={ResultState.errorWords} />}
        <ResultItem>
          Type Speed: <Bold>{ResultState.typeSpeed}</Bold>
        </ResultItem>
      </ResultInfo>
      <button onClick={goAgain}>GO</button>
    </ResultContainer>
  )
})
