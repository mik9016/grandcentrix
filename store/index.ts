import { createStore } from 'vuex'

const state = {
  loggedIn: false,
}

const mutations = {
  login(state) {
    state.loggedIn = true
  },
  logout(state) {
    state.loggedIn = false
  },
}

const actions = {

}

const getters = {
  loggedInGetter: (state) => (state.loggedIn),
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
})
