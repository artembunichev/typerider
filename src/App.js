import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Header } from './pages/Components/Common/Header'
import { Welcome } from './pages/Main/Welcome'
import { createGlobalStyle } from 'styled-components'
import { GamePage } from './pages/Game/GamePage'

const Global = createGlobalStyle`
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
  input {
    outline: none;
    border: 0;
  }
`

export const App = () => {
  return (
    <>
      <Global />
      <Header />
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/game' component={GamePage} />
        <Redirect to={'/'} />
      </Switch>
    </>
  )
}
