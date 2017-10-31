const loadWorker = f => {
  const code = f.toString()
  const codeBody = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"))
  
  const blob = new Blob([codeBody], {type: "application/javascript"})
  return URL.createObjectURL(blob)
} 

export default loadWorker
  