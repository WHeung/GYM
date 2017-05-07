import * as types from '../types'

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
  }
}

export default {
  state: State,
  mutations: Mutations,
  actions: Actions
}
