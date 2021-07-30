import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Header } from './Components/Common/Header'
import { Welcome } from './pages/Main/Welcome'
import { createGlobalStyle } from 'styled-components'
import { GamePage } from './pages/Game/GamePage'
import { History } from './pages/History/History'
import { useStore } from './stores/RootStore/RootStoreContext'
import { observer } from 'mobx-react-lite'

const Global = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing:border-box;
  }
  body{
    overflow:${(props) => props.isAnyPopupOpen && 'hidden'};
    background-color: #bdbdbd;
  }
  body > #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  button {
    border: 0;
    &:hover {
      cursor: pointer;
    }
  }
  input {
    outline: none;
    border: 0;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #bdbdbd;
    border-radius: 10px;
  }
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px #ffc;
    background-color: #ffc;
  }
`

export const App = observer(() => {
  const { AppStore } = useStore()
  return (
    <>
      <Global isAnyPopupOpen={AppStore.isAnyPopupOpen} />
      <Header />
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/game' component={GamePage} />
        <Route exact path='/history' component={History} />
        <Redirect to={'/'} />
      </Switch>
    </>
  )
})
