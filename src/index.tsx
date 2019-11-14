import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {LoadableIds} from './constants/loadable'

window.submodels = {
    [LoadableIds.HEADER]: {title: 'This is Header!'},
    [LoadableIds.FOOTER]: {title: 'Hello world! It is loadable Footer!'},
}

ReactDOM.render(<App/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
