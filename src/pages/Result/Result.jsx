import React from 'react'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../stores/RootStore/RootStoreContext'
import styled from 'styled-components'
import { Container } from '../Components/Styled/StyledComponents'

const ResultContainer = styled(Container)`
  background-color: #ff00f2;
`
const ErrorsCountContainer = styled.div``

export const Results = observer(() => {
  const { ResultStore } = useStore()
  const history = useHistory()

  if (!ResultStore.isResultReady) {
    history.push('/')
  }
  return (
    <ResultContainer>
      <ErrorsCountContainer>You got {ResultStore.errorsCount} mistakes</ErrorsCountContainer>
    </ResultContainer>
  )
})
