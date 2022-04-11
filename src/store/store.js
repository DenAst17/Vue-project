import { createStore } from "vuex";

const store = createStore({
    state () {
      return {
        count: 0,
        loginInfo: undefined
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      setLoginInfo (state, loginInfo) {
        state.loginInfo = loginInfo;
      }
    }
  })

  export{store};