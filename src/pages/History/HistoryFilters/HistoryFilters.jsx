import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { FiltersSelect } from './FiltersSelect'
import { ClearIcon } from '../../../assets/images/iconComponents/Clear'
import { useStore } from '../../../stores/RootStore/RootStoreContext'

const FiltersContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FiltersTitle = styled.div`
  @media (max-width: 650px) {
    font-size: 31px;
  }
  @media (max-width: 540px) {
    font-size: 28px;
  }
  @media (max-width: 440px) {
    font-size: 25px;
  }
  @media (max-width: 360px) {
    font-size: 24px;
  }
  font-size: 35px;
`
const ClearHistoryIcon = styled.div`
  svg {
    @media (max-width: 490px) {
      width: 24px;
      height: 24px;
    }
    @media (max-width: 390px) {
      width: 22px;
      height: 22px;
    }
    width: 29px;
    height: 29px;
  }
  position: absolute;
  right: 10px;
  bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`

export const HistoryFilters = observer((props) => {
  const { AppStore } = useStore()
  const { setIsPopup } = props

  const showPopup = () => {
    setIsPopup(true)
    AppStore.setIsAnyPopupOpen(true)
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
