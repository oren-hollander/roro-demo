import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import workerMain from './worker'
import loadWorker from './loadWorker'

var myWorker = new Worker(loadWorker(workerMain))

myWorker.onmessage = (m) => {
  console.log("msg from worker: ", m.data)
}

myWorker.postMessage('im from main')

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
