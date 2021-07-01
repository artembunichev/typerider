/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { createContext } from 'react'
import { RootStore } from './RootStore'

const RootStoreContext = createContext(null)

export const RootStoreProvider = ({ children }) => {
  const rootStore = new RootStore()
  return <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>
}

export const useStore = () => useContext(RootStoreContext)
