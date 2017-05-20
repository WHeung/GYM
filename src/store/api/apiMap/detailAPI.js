import * as Types from '~src/store/types'
import Axios from 'axios'
import getTimeStampId from '~src/tool/getTimeStampId'

const apiMap = {}
const axiosRequest = Axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})

apiMap[Types.FETCH_DETAIL_DATA] = function (id) {
  return axiosRequest.post('/detail',
    JSON.stringify({
      id: getTimeStampId(),
      data: { id }
    })
  )
}

export default apiMap
