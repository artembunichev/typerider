import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { Container, Bold } from '../../../Components/Styled/StyledComponents'
import { useHistory } from 'react-router-dom'
import { GameStoreContext } from '../../../stores/RootStore/RootStoreContext'

const ResultContainer = styled(Container)`
  background-color: #ff00f2;
`
const ErrorsCountContainer = styled.div``
const ErrorWordsContainer = styled.div``
const ErrorWord = styled.div``
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
      {ResultState.errorsCount > 0 ? (
        <ErrorWordsContainer>
          You made a mistake in these words :{' '}
          {ResultState.errorWords.map((error) => {
            return <ErrorWord key={error}>{error}</ErrorWord>
          })}
        </ErrorWordsContainer>
      ) : null}
      {ResultState.typeSpeed}
      <button onClick={goAgain}>GO</button>
    </ResultContainer>
  )
})
