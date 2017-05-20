import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
import mapModule from './modules/map'
import detailModule from './modules/detail'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    toast: {
      content: '',
      show: false,
      liveTime: 3000,
      type: ''
    },
    popUp: {
      word: '',
      leftMsg: '',
      rightMsg: '',
      cancelCallback: null,
      callback: null,
      show: false
    },
    loading: true,
    apiLoading: false
  },
  mutations: {
    [types.SET_TOAST] (state, { content, show, type }) {
      state.toast.content = content
      state.toast.show = show
      state.toast.type = type
    },
    [types.SET_API_LOADING] (state, val) {
      state.apiLoading = val
    },
    [types.SET_LOADING] (state, val) {
      state.loading = val
    },
    [types.SET_POPUP] (state, popUp) {
      state.popUp = Object.assign({}, state.popUp, popUp)
    }
  },
  actions: {
    [types.OPEN_TOAST] ({ commit, state }, { content, type }) {
      if (typeof type !== 'string') {
        type = ''
      }
      commit(types.SET_TOAST, { content, type, show: true })
      setTimeout(() => {
        commit(types.SET_TOAST, { content: '', type: '', show: false })
      }, state.toast.liveTime)
    },
    [types.OPEN_LOADING] ({ commit }) {
      commit(types.SET_LOADING, true)
    },
    [types.CLOSE_LOADING] ({ commit }) {
      commit(types.SET_LOADING, false)
    },
    [types.OPEN_API_LOADING] ({ commit }) {
      commit(types.SET_LOADING, true)
    },
    [types.CLOSE_API_LOADING] ({ commit }) {
      commit(types.SET_LOADING, false)
    },
    [types.OPEN_POPUP] ({ commit, state }, popUp) {
      commit(types.SET_POPUP, Object.assign({}, state.popUp, popUp, { show: true }))
    },
    [types.CLOSE_POPUP] ({ commit, state }) {
      commit(types.SET_POPUP, Object.assign({}, state.popUp, {
        word: '',
        leftMsg: '',
        rightMsg: '',
        cancelCallback: null,
        callback: null,
        show: false
      }))
    }
  },
  modules: {
    map: mapModule,
    detail: detailModule
  }
})

export default store
