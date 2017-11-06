import Worker from './test.worker'
import { importFromWorker } from 'roro.js'

importFromWorker(new Worker())
  .then(add => add(2, 5))
  .then(console.log.bind(console))
