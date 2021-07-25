import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { FiltersSelect } from './FiltersSelect/FiltersSelect'
import { ClearIcon } from '../../../assets/images/iconComponents/Clear'

const FiltersContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 36px;
`
const FiltersTitle = styled.div``
const ClearHistoryIcon = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0px;
  &:hover {
    cursor: pointer;
  }
`

export const HistoryFilters = observer((props) => {
  const { setIsPopup } = props

  const showPopup = () => {
    setIsPopup(true)
  }

  return (
    <>
      <FiltersContainer>
        <FiltersTitle>Choose Filter</FiltersTitle>
        <FiltersSelect />
        <ClearHistoryIcon onClick={showPopup}>
          <ClearIcon />
        </ClearHistoryIcon>
      </FiltersContainer>
    </>
  )
})
