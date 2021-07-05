import { getFullURL } from './url.js'
const successCodes = ['0000', 1000]
function getHeaders() {
  const headers = new Headers()
  const token = localStorage.getItem('token')
  headers.set('Authorization', token)
  headers.set('Content-Type', 'application/x-www-form-urlencoded')
  return headers
}
function getInit(body) {
  return {
    method: 'POST',
    headers: getHeaders(),
    body: new URLSearchParams(body).toString(),
  }
}
async function fetchData(url, params, returnAllData) {
  url = getFullURL(url)
  const response = await fetch(url, getInit(params))
  if (response.ok) {
    const res = await response.json()
    // vlevin @ 2020-06-25 注意，成功仅返回数据实体，失败则返回全部返回结果，错误由调用之处处理
    if (successCodes.includes(res.code) && returnAllData) {
      return res
    } else if (successCodes.includes(res.code)) {
      return res.data
    } else {
      throw res
    }
  } else {
    throw response
  }
}
export { fetchData }
