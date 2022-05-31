import { createStore } from 'vuex'

const state = {
  loggedIn: false,
}

const mutations = {
  login(state: { loggedIn: boolean }, payload: { email: string; password: string }): void {
    if (payload.email === 'mik@mik.de' && payload.password === 'mik') {
      state.loggedIn = true
    }
  },
  logout(state: { loggedIn: boolean }): void {
    state.loggedIn = false
  },
}

const actions = {}

const getters = {
  loggedInGetter: (state: { loggedIn: boolean }) => state.loggedIn,
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
})
