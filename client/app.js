import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(<App />, document.querySelector('#react-root'))

// React hot loader
if (module.hot) {
   module.hot.accept('./components/App', () => {
     const NextRootContainer = require('./components/App').default
     ReactDOM.render(<NextRootContainer />, document.querySelector('#react-root'))
   })
}
