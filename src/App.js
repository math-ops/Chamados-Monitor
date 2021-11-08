import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyle from './style/global'
import Login from './components/LoginScreen/index'

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Login}/>

      </Switch>

    </BrowserRouter>

     <GlobalStyle />
    </>
  );
}

export default App;
