import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import { GameStoreContext } from '../../../stores/RootStore/RootStoreContext'
import { Container, Bold } from '../../../Components/Styled/StyledComponents'
import { ErrorWords } from './ErrorWords'

const ResultContainer = styled(Container)`
  background-color: #ff00f2;
`
const ErrorsCountContainer = styled.div``
const CorrectWordsContainer = styled.div``

export const Result = observer(() => {
  const { ResultState } = useContext(GameStoreContext)

  const history = useHistory()

  if (!ResultState.isResultReady) {
    history.push('/')
  }

  const goAgain = () => {
    history.push('/')
  }

  return (
    <ResultContainer>
      <CorrectWordsContainer>
        You got <Bold>{ResultState.correctWordsCount}</Bold> correct words!
      </CorrectWordsContainer>
      <ErrorsCountContainer>
        You got <Bold>{ResultState.errorsCount}</Bold> mistakes ({ResultState.errorsPercent}%)
      </ErrorsCountContainer>
      <ErrorWords words={ResultState.errorWords} />
      {ResultState.typeSpeed}
      <button onClick={goAgain}>GO</button>
    </ResultContainer>
  )
})
