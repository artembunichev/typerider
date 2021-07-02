import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Header } from './pages/Components/Header'
import { Welcome } from './pages/Main/Welcome'
import { css, Global } from '@emotion/react'
import { Game } from './pages/Game/Game'
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
            margin: 20px;
          }
        `}
      />
      <Header />
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/game' component={Game} />
        <Redirect to={'/'} />
      </Switch>
    </>
  )
}
