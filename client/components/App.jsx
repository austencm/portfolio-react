import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Intro from 'Intro'
import Portfolio from 'Portfolio'
import styles from 'app.scss'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <div>
          <Switch>

            <Route path="/portfolio" component={Portfolio} />
            <Route path="/" component={Intro} />

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
