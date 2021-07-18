import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { FiltersSelect } from './FiltersSelect/FiltersSelect'
import { ClearIcon } from '../../../assets/images/iconComponents/Clear'
import { ConfirmPopup } from '../../../Components/Common/ConfirmPopup'
import { useStore } from '../../../stores/RootStore/RootStoreContext'

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

export const HistoryFilters = observer(() => {
  const { HistoryStore } = useStore()
  const [isPopup, setIsPopup] = useState(false)
  const showPopup = () => {
    setIsPopup(true)
  }
  const yesFunction = () => {
    HistoryStore.clearHistory()
    setIsPopup(false)
  }
  const noFunction = () => {
    setIsPopup(false)
  }
  const titleForPopup = `Do you want to clear your game history (${HistoryStore.gameHistory.length} games)?`
  const configForPopup = {
    isPopup: isPopup,
    title: titleForPopup,
    yesFunction: yesFunction,
    noFunction: noFunction,
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
      <ConfirmPopup {...configForPopup} />
    </>
  )
})
