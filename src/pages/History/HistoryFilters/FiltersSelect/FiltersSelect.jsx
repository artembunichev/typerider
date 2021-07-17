import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../stores/RootStore/RootStoreContext'
import { Bold } from '../../../../Components/Styled/StyledComponents'

const SelectWrapper = styled.div`
  position: relative;
  z-index: ${(props) => (props.isWrapperHigher ? 10 : 1)};
  margin: 8px;
`
const PlaceForOptions = styled.div`
  position: absolute;
  z-index: -1;
  top: 33px;
  width: 100%;
  height: 120px;
  overflow: hidden;
`
const SelectContainer = styled.div`
  position: relative;
  z-index: 10;
  background-color: #ffc;
  border-radius: 6px 6px 0px 0px;
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
const SelectValueText = styled.span`
  font-size: 25px;
  user-select: none;
`
const SelectArrow = styled.div`
  position: absolute;
  right: 6px;
  top: 2.5px;
  display: flex;
  align-items: center;
  transform: ${(props) => (props.directionDown ? `rotate(180deg)` : `none`)};
  transition: transform ease-out 0.33s;
`
const OptionsContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: ${(props) => (props.isVisible ? '-6px' : '-122px')};
  margin-top: 6px;
  transition: 0.33s;
`
const Option = styled.div`
  display: flex;
  width: 210px;
  font-size: 23px;
  user-select: none;
  background-color: ${(props) => {
    return props.isUserIdle ? (props.isSelected ? `#ff820d` : `#ffc`) : `#ffc`
  }};
  transition: background-color 0.33s;
  &:hover {
    cursor: pointer;
    background-color: #ff820d;
  }
  &:last-child {
    border-radius: 0px 0px 6px 6px;
  }
`
const OptionValue = styled.span`
  padding: 6px;
`

export const FiltersSelect = observer(() => {
  const { HistoryStore } = useStore()
  const [isOptionsVisible, setIsOptionsVisible] = useState(false)
  const [isWrapperHigher, setIsWrapperHigher] = useState(false)
  const [isUserIdle, setIsUserIdle] = useState(true)

  const updateIsOptionsVisible = (value) => {
    setIsOptionsVisible(value)
    if (value === false) {
      setTimeout(() => {
        setIsWrapperHigher(value)
      }, 330)
    } else {
      setIsWrapperHigher(value)
    }
  }
  const onSelectClick = () => {
    updateIsOptionsVisible(!isOptionsVisible)
  }
  const onSelectBlur = () => {
    updateIsOptionsVisible(false)
  }
  const onOptionHover = (filter) => {
    if (filter === HistoryStore.activeFilterValue) {
      setIsUserIdle(true)
    } else {
      setIsUserIdle(false)
    }
  }
  const onOptionsLeave = () => {
    setIsUserIdle(true)
  }
  const setActiveFilter = (filter) => {
    HistoryStore.setActiveFilter(filter)
    updateIsOptionsVisible(false)
  }
  const onOptionClick = (filter) => {
    setActiveFilter(filter)
  }

  const optionsList = HistoryStore.filters.map((filter) => {
    const isOptionSelected = HistoryStore.activeFilterValue === filter.filter
    return (
      <Option
        key={filter.name}
        isSelected={isOptionSelected}
        isUserIdle={isUserIdle}
        onMouseEnter={() => onOptionHover(filter.filter)}
        onClick={() => onOptionClick(filter)}>
        <OptionValue>
          <Bold>{filter.name}</Bold>
        </OptionValue>
      </Option>
    )
  })

  return (
    <SelectWrapper tabIndex='1' onBlur={onSelectBlur} isWrapperHigher={isWrapperHigher}>
      <SelectContainer>
        <Select onClick={onSelectClick}>
          <SelectValue>
            <SelectValueText>
              <Bold>{HistoryStore.activeFilterName}</Bold>
            </SelectValueText>
            <SelectArrow directionDown={isOptionsVisible}>
              <i className='fa fa-caret-down' aria-hidden='true'></i>
            </SelectArrow>
          </SelectValue>
        </Select>
      </SelectContainer>
      <PlaceForOptions>
        <OptionsContainer isVisible={isOptionsVisible} onMouseLeave={onOptionsLeave}>
          {optionsList}
        </OptionsContainer>
      </PlaceForOptions>
    </SelectWrapper>
  )
})
