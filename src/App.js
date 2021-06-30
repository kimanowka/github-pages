import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Repos from './components/Repos'
import Country from './components/Country'
import NavBar from './components/NavBar'
import './index.css'



const App = () => {


  return (
    
    <BrowserRouter>
        <NavBar/>
      <Switch>
        <Route path='/' exact>
          <Repos />
        </Route>
        <Route path='/country' exact>
          <Country />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
