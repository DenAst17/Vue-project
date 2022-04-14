import { createStore } from "vuex";

const store = createStore({
    state () {
      return {
        count: 0,
        loginInfo: undefined,
        info: [{id: 1, name: "Vlad", email: "vlad@ukr.net"}]
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