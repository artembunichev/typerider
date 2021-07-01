import React from 'react'
import { Header } from './pages/Components/Header'
import { Welcome } from './pages/Main/Welcome'
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
          body > #root {
            height: 100vh;
            display: flex;
            flex-direction: column;
          }
          button {
            border: 0;
          }
        `}
      />
      <Header />
      <Welcome />
    </>
  )
}
