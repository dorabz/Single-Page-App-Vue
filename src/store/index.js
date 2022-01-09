import { createStore } from "vuex"

const store = createStore({
  state: {
    points: -5
  },
  mutations: {
    updatePoints(state, payload) {
      state.points = state.points + payload
    }
  }
})


export default store
