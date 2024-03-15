import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

import { history } from 'shared/lib/history'
import { setLogger } from 'shared/lib/logger'

import Application from './application'

import './init'

const rootReact = document.querySelector('#root')

/* SET EFFECTOR DEV LOGGER */
setLogger()

if (!rootReact) {
  throw new Error("Can't find root element")
}

function render(): void {
  ReactDOM.render(
    <Router history={history}>
      <Application />
    </Router>,
    rootReact
  )
}

if (module.hot) {
  module.hot.accept('./application')
}

render()
