import { baseUrl } from './env'

export default async (url = '', data = {}, method = 'GET', way = 'fetch') => {
  method = method.toUpperCase()
  url = baseUrl + url

  if (method === 'GET') {
    let dataStr = ''
    Object.keys(data).forEach(key => {
      dataStr += `${key}=${data[key]}&`
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url += `?${dataStr}`
    }
  }

  if (window.fetch && way === 'fetch') {
    let requestConfig = {
      credentials: 'include',
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'force-cache'
    }

    if (method === 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }

    try {
      const response = await fetch(url, requestConfig)
      const responseJson = await response.json()
      return responseJson
    } catch (error) {
      throw new Error(error)
    }
  } else { // fetch polyfill
    return new Promise((resolve, reject) => {
      let requestObj
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest()
      } else if (window.ActiveXObject) {
        const ActiveXObject = window.ActiveXObject
        requestObj = new ActiveXObject()
      }

      let sendData = ''
      if (method === 'POST') {
        sendData = JSON.stringify(data)
      }

      requestObj.open(method, url, true)
      requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      requestObj.send(sendData)

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState === 4) {
          if (requestObj.status === 200) {
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            resolve(obj)
          } else {
            reject(requestObj)
          }
        }
      }
    })
  }
}
