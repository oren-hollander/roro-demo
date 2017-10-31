const workerMain = () => {
  //eslint-disable-next-line
  self.onmessage = e => { 
    console.log('Message received from main script')
    const workerResult = 'Received from main: ' + e.data;
    console.log('Posting message back to main script')
    postMessage(workerResult)
  }
}

// const code = workercode.toString()
// const codeBody = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"))

// const blob = new Blob([codeBody], {type: "application/javascript"})
// const worker_script = URL.createObjectURL(blob)

// export default worker_script
  
export default workerMain