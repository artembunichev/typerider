import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Header } from './pages/Components/Header'
import { Welcome } from './pages/Main/Welcome'
import { Game } from './pages/Game/Game'
import { createGlobalStyle } from 'styled-components'
import { Results } from './pages/Results/Results'

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
        <Route exact path='/game' component={Game} />
        <Route exact path ='/results' component={Results} />
        <Redirect to={'/'} />
      </Switch>
    </>
  )
}
