import { createStore } from 'vuex'

const state = {
  loggedIn: false,
}

const mutations = {
  login(state) {
    state.loggedIn = true
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
