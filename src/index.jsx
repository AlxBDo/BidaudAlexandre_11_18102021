import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Error from './components/error'
import Header from './components/header'
import Home from './pages/Home'
import Logement from './pages/Logement'
import APropos from './pages/APropos'
import Footer from './components/footer'

import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <Router>
          <Route 
            render={(props) => <Header {...props} />}
          />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route 
            path="/Logement/:id_logement"
            render={(props) => <Logement {...props} />}
          />
          <Route path="/A-Propos">
            <APropos />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)