import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { FiltersSelect } from './FiltersSelect/FiltersSelect'

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 31px;
`

export const HistoryFilters = observer(() => {
  return (
    <FiltersContainer>
      Choose Filter
      <FiltersSelect />
    </FiltersContainer>
  )
})
