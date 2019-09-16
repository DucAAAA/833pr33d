const toCamelCase = obj => {
  let rtn = obj
  if (typeof (obj) === 'object') {
      if (obj instanceof Array) {
          rtn = obj.map(toCamelCase)
      } else {
          rtn = {}
          for (let key in obj) {
              if (obj.hasOwnProperty(key)) {
                   const newKey = key.replace(/(_\w)/g, k => k[1].toUpperCase())
                   rtn[newKey] = toCamelCase(obj[key])
              }
          }
      }
  }
  return rtn
}
