import * as types from '../types'
import CallApi from '../api'
import data from '~src/../mock-data/goods/goodList/a.json'

const State = {
  stores: [],
  selectId: null
}

const Mutations = {
  [types.SET_MAP_STORES] (state, stores) {
    state.stores = [...stores]
  },
  [types.SET_MAP_SELECTID] (state, id) {
    state.selectId = id
  }
}

const Actions = {
  [types.UPDATE_MAP_SELECTED] ({ commit, state }, id) {
    if (state.selectId === id) {
      return
    }
    commit(types.SET_MAP_SELECTID, id)
  },
  [types.UPDATE_MAP_STORES] ({ commit, state, dispatch }, place) {
    return new Promise(resolve => {
      /* CallApi(types.FETCH_MAP_STORES, place).then(res => {
        commit(types.SET_MAP_STORES, res.data.data)
        dispatch(types.UPDATE_MAP_SELECTED, res.data.data[0].id)
        resolve()
      }) */
      commit(types.SET_MAP_STORES, data.data)
      dispatch(types.UPDATE_MAP_SELECTED, data.data[0].id)
      resolve()
    })
  }
}

export default {
  state: State,
  mutations: Mutations,
  actions: Actions
}
