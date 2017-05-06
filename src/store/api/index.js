import { checkResponseCode } from './responseCode'
import * as types from '../types'
import store from '../'

const apiMap = {
}

export default function callApi (apiName, params) {
  return new Promise((resolve, reject) => {
    store.dispatch(types.OPEN_API_LOADING)
    apiMap[apiName](params).then(res => {
      store.dispatch(types.CLOSE_API_LOADING)
      console.log(res.data)
      const codeResult = checkResponseCode(res.data.state.code)
      if (codeResult.isSuccess) {
        resolve(res)
      } else {
        reject(codeResult)
      }
    }).catch(() => {
      store.dispatch(types.CLOSE_API_LOADING)
      store.dispatch(types.OPEN_TOAST, { content: 'http response error' })
    })
  })
}
