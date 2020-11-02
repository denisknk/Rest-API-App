export default {
    state: {
        isHidden: ""
    },
    mutations: {
        UPDATE_IS_HIDDEN(state, bool) {
            state.isHidden = bool
        }
    },
    actions: {
        SET_IS_HIDDEN_HOME_BUTTON(ctx, bool) {
            ctx.commit('UPDATE_IS_HIDDEN', bool) 
        }
    },
    getters: {
      GET_IS_HIDDEN_HOME_BUTTON(state) {
         return state.isHidden
     }   
    }
}