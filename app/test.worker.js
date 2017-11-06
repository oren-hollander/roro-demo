// import { MessageRPC, WebWorkerChannel, NativeSerializer, RemoteFunction } from 'roro.js'
import { exportFromWorker } from 'roro.js'

const add = (a, b) => a + b

// MessageRPC(WebWorkerChannel(self), NativeSerializer)
//   .then(rpc => rpc.connect(RemoteFunction(add)))

exportFromWorker(add)
