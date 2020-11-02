export default {
    state: {
        isHiddenNew: ""
    },
    mutations: {
        UPDATE_IS_HIDDEN_NEW(state, bool) {
            state.isHiddenNew = bool
        }
    },
    actions: {
        SET_IS_HIDDEN_NEW_POST_BUTTON(ctx, bool) {
            ctx.commit('UPDATE_IS_HIDDEN_NEW', bool) 
        }
    },
    getters: {
        GET_IS_HIDDEN_NEW_POST_BUTTON(state) {
         return state.isHiddenNew
     }   
    }
}