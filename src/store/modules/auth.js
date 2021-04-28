const state = {
  token: null,
}
const getters = {
  isLoggedIn: (state) => !!state.token,
}
const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
}
const actions = {
  login:({commit}, token) => {
    commit('setToken', token);
  },
  logout: ({commit}) => {
    commit('setToken', null);
  },
}
export default {
  state,
  getters,
  mutations,
  actions,
}