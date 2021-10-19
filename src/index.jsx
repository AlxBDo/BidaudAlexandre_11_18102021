import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Error from './components/error'
import Header from './components/header'
import Home from './pages/Home'
import Footer from './components/footer'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
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