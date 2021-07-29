import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import { GameStoreContext } from '../../../stores/RootStore/RootStoreContext'
import { Container, Bold } from '../../../Components/Styled/StyledComponents'
import { ErrorWords } from './ErrorWords'
import { wordFormConverter } from '../../../assets/functions/wordFormConverter'

const ResultContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #45678f;
`
const ResultInfoContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
`
const ResultInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border-radius: 10px;
  background-color: #c5e3ff;
`
const ResultItem = styled.div`
  font-size: 46px;
  margin: 7px 0px;
  &:first-child {
    margin-top: 0px;
  }
  &:last-child {
    margin-bottom: 0px;
  }
`
const StartNewGameButton = styled.button`
  width: 100%;
  font-size: 28px;
  margin: 6px;
  padding: 5px;
  border-radius: 10px;
  background-color: #c5e3ff;
`

export const Result = observer(() => {
  const { ResultState } = useContext(GameStoreContext)
  const [resultInfoWidth, setResultInfoWidth] = useState(null)
  const resultInfoRef = useRef()

  useEffect(() => {
    ResultState.setErrorLettersCountInWords()
    setResultInfoWidth(resultInfoRef.current.offsetWidth)
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
      <ResultInfoContainer>
        <ResultInfo ref={resultInfoRef}>
          <ResultItem>
            You got <Bold>{ResultState.correctWordsCount}</Bold> correct {wordForm}!
          </ResultItem>
          <ResultItem>
            You got <Bold>{ResultState.errorsCount}</Bold> {mistakeForm} ({ResultState.errorsPercent}%)
          </ResultItem>
          {ResultState.errorWords.length !== 0 && (
            <ErrorWords words={ResultState.sortedErrorWords} resultInfoWidth={resultInfoWidth} />
          )}
          <ResultItem>
            Type Speed: <Bold>{ResultState.typeSpeed}</Bold> sym/min
          </ResultItem>
        </ResultInfo>
        <StartNewGameButton onClick={goAgain}>Start New Game</StartNewGameButton>
      </ResultInfoContainer>
    </ResultContainer>
  )
})
