import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../stores/RootStore/RootStoreContext'

const FiltersContainer = styled.div``
const FiltersSelect = styled.select``
const FiltersOption = styled.option``

export const HistoryFilters = observer(() => {
  const { HistoryStore } = useStore()

  const HistoryFiltersList = HistoryStore.filters.map((filter) => {
    return (
      <FiltersOption key={filter.name} value={filter.filter}>
        {filter.name}
      </FiltersOption>
    )
  })

  const setActiveFilter = (e) => {
    HistoryStore.setActiveFilter(e.target.value)
  }

  return (
    <FiltersContainer>
      Choose Filter:
      <FiltersSelect value={HistoryStore.activeFilter} onChange={setActiveFilter}>
        {HistoryFiltersList}
      </FiltersSelect>
    </FiltersContainer>
  )
})
