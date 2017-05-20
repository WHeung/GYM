import * as types from '../types'
import CallApi from '../api'

const State = {
  data: {}
}

const Mutations = {
  [types.SET_DETAIL_DATA] (state, detail) {
    state.data = Object.assign(state.data, detail)
  }
}

const Actions = {
  [types.UPDATE_DETAIL_DATA] ({ commit, state }, id) {
    return new Promise(resolve => {
      CallApi(types.FETCH_DETAIL_DATA, id).then(res => {
        commit(types.SET_DETAIL_DATA, res.data.data)
        resolve()
      })
    })
  }
}

export default {
  state: State,
  mutations: Mutations,
  actions: Actions
}
