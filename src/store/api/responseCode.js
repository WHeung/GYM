import * as types from '../types'

export function checkResponseCode (code) {
  if (code + '' === '0') {
    return { isSuccess: true }
  } else {
    return {
      code: code,
      isSuccess: false,
      type: checkType(code)
    }
  }
}

export const HTTP_REPEAT_REQUEST_ERROR = 20304

function checkType (code) {
  code = code + ''
  switch (code) {
  default:
    return types.UNKOWN_HTTP_ERROR
  }
}
