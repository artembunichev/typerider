import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../stores/RootStore/RootStoreContext'

const SelectContainer = styled.div`
  background-color: #ffc;
  position: relative;
`
const Select = styled.div`
  width: 210px;
  height: 30px;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`
const SelectValue = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 6px;
`
const SelectValueText = styled.span``
const SelectArrow = styled.div`
  display: flex;
  align-items: center;
  transform: ${(props) => (props.onDown ? `rotate(180deg)` : `none`)};
  transition: transform ease-out 0.33s;
`

const OptionsContainer = styled.div`
  position: absolute;
  z-index: 10;
`
const Option = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  background-color: #ffc;
  width: 210px;
  font-size: 21px;
  transition: background-color 0.2s;
  background-color: ${(props) => {
    return props.isUserIdle ? (props.isSelected ? `#ff820d` : `#ffc`) : `#ffc`
  }};
  &:hover {
    cursor: pointer;
    background-color: #ff820d;
  }
`
const OptionValue = styled.span`
  padding: 6px;
`

export const FiltersSelect = observer(() => {
  const { HistoryStore } = useStore()
  const [isOptionsVisible, setIsOptionsVisible] = useState(false)
  const [isUserIdle, setIsUserIdle] = useState(true)

  const onSelectClick = () => {
    setIsOptionsVisible(!isOptionsVisible)
  }
  const onSelectBlur = () => {
    setIsOptionsVisible(false)
  }
  const onOptionsLeave = () => {
    setIsUserIdle(true)
  }
  const setActiveFilter = (filter) => {
    HistoryStore.setActiveFilter(filter)
    setIsOptionsVisible(false)
  }
  const onOptionHover = (filter) => {
    if (filter === HistoryStore.activeFilterValue) {
      setIsUserIdle(true)
    } else {
      setIsUserIdle(false)
    }
  }

  const optionsList = HistoryStore.filters.map((filter) => {
    const isOptionSelected = HistoryStore.activeFilterValue === filter.filter
    return (
      <Option
        key={filter.name}
        visible={isOptionsVisible}
        isSelected={isOptionSelected}
        isUserIdle={isUserIdle}
        onMouseEnter={() => onOptionHover(filter.filter)}
        onClick={() => setActiveFilter(filter)}>
        <OptionValue>{filter.name}</OptionValue>
      </Option>
    )
  })

  return (
    <SelectContainer>
      <Select onClick={onSelectClick} tabIndex='1' onBlur={onSelectBlur}>
        <SelectValue>
          <SelectValueText>{HistoryStore.activeFilterName}</SelectValueText>
          <SelectArrow onDown={isOptionsVisible}>
            <i className='fa fa-caret-down' aria-hidden='true'></i>
          </SelectArrow>
        </SelectValue>
        <OptionsContainer onMouseLeave={onOptionsLeave}>{optionsList}</OptionsContainer>
      </Select>
    </SelectContainer>
  )
})
