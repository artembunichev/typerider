import React from 'react'
import { Header } from './components/Header'
import { css, Global } from '@emotion/react'
export const App = () => {
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0px;
            padding: 0px;
          }
        `}
      />
      <Header />
    </>
  )
}
