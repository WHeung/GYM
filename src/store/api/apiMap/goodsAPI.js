import * as Types from '~src/store/types'
import Axios from 'axios'
import getTimeStampId from '~src/tool/getTimeStampId'

const apiMap = {}
const axiosRequest = Axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})

apiMap[Types.FETCH_MAP_STORES] = function (place) {
  return axiosRequest.post('/goods/list',
    JSON.stringify({
      id: getTimeStampId(),
      data: place
    })
  )
}

export default apiMap
