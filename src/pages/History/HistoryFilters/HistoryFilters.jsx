import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { FiltersSelect } from './FiltersSelect/FiltersSelect'

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 36px;
`
const FiltersTitle = styled.div``

export const HistoryFilters = observer(() => {
  return (
    <FiltersContainer>
      <FiltersTitle>Choose Filter</FiltersTitle>
      <FiltersSelect />
    </FiltersContainer>
  )
})
